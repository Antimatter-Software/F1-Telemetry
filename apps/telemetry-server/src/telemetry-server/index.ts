import { createSocket } from "dgram";
import { open, close, write } from "fs";
import { join } from "path";
import { workspaceRoot } from "@nrwl/devkit";
import debug from "debug";
import { networkInterfaces } from "os";

const log = debug("telemetry-server:listener");

export default function buildTelemetryListener(): VoidFunction {
    let file: number = Number.NaN, listening = false;
    const server = createSocket("udp4", function onMessage(buffer: Buffer): void {
        log(`Received a new UDP packet of ${buffer.length} bytes, storing to DAT file...`);
        // Write the buffer to the dat file.
        write(file, buffer, function onDataWritten(): void { /* Do nothing for now ... */ });
    });

    // Prepare the temporary DAT file.
    open(join(workspaceRoot, "out", "telemetry.dat"), "w", 0o666, function onFileReady(error: Error | null, handle: number): void {
        // If an error arose, rethrow it.
        if (error !== null) {
            throw error;
        }
        log("Dat file is ready for storage");

        // Store the file handle.
        file = handle;

        // Listen for incoming requests.
        server.bind(8241, "0.0.0.0", function onServerReady(): void {
            const addresses = networkInterfaces();
            for (const key of Object.keys(addresses)) {
                const interfaces = addresses[key];
                for (const net of interfaces) {
                    // Ignore internal interfaces.
                    if (net.internal) {
                        continue;
                    }
                    // Ignore IPv6 addresses
                    if (net.family !== "IPv4") {
                        continue;
                    }

                    // Log the listener address.
                    log(`Listening for UDP packets on ${net.address}:8241`);
                }
            }
            listening = true;
        });
    });


    /** Return a cleanup function. */
    return function cleanup(): void {
        if (!isNaN(file)) {
            log("Closing the DAT file");
            close(file);
            file = Number.NaN;
        }
        if (listening) {
            log("Closing the telemetry listener");
            server.close();
            listening = false;
        }
    }
}