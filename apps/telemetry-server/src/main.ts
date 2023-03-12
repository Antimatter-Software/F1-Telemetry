// import buildTelemetryListener from "./telemetry-server";
import { readFile, writeFile } from "fs";
import { join } from "path";
import { workspaceRoot } from "@nrwl/devkit";
import {parsePacketsFromBuffer} from "./telemetry-server/parser";
import {F1EventPacketID} from "./telemetry-server/parser/interfaces/id";

readFile(join(workspaceRoot, "out", "telemetry.dat"), function onFileData(error: Error | null, buffer: Buffer): void {
    if (error !== null) {
        throw error;
    }

    const packets = parsePacketsFromBuffer(buffer)
        // Filter out BUTN events for readability.
        .filter(packet => packet.id !== F1EventPacketID || packet.type !== "BUTN");

    // Write the packets to a json file.
    writeFile(join(workspaceRoot, "out", "telemetry.json"), JSON.stringify(packets, null, 4), function onDataWritten(): void {
        console.log("SAVED !");
    });
})

// // Close the listener on a SIGINT.
// const close = buildTelemetryListener();
// process.on("SIGINT", close);
// process.on("SIGTERM", close);
