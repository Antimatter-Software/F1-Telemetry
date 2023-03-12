import {F1Packet} from "./interfaces";
import parsePacketHeader, {F1HeaderPacketSize} from "./header";
import {
    F1CarDamagePacketID,
    F1CarSetupsPacketID,
    F1CarStatusPacketID,
    F1CarTelemetryPacketID,
    F1EventPacketID,
    F1FinalClassificationPacketID,
    F1LapDataPacketID,
    F1LobbyInfoPacketID,
    F1MotionPacketID, F1PacketID,
    F1ParticipantsPacketID,
    F1SessionHistoryPacketID,
    F1SessionPacketID
} from "./interfaces/id";
import parseEventPacket from "./event";
import {F1PacketSizes} from "./interfaces/sizes";
import {F1PacketHeader} from "./interfaces/header";

export function parsePacketsFromBuffer(buffer: Buffer): F1Packet[] {
    // Loop through the buffer to generate the packets.
    const packets: F1Packet[] = [];
    let pointer = 0;
    while (pointer < buffer.length) {
        // Parse the header at the current buffer location.
        let view = new DataView(buffer.buffer, pointer, F1HeaderPacketSize);
        const header = parsePacketHeader(view);

        // Check if the buffer has missing data.
        if (buffer.length < pointer + F1PacketSizes[header.id]) {
            console.warn("Could not read a packet, buffer contains a partial packet object at the end");
            break;
        }
        // Parse the full data from the packet.
        view = new DataView(buffer.buffer, pointer + F1HeaderPacketSize, F1PacketSizes[header.id] - F1HeaderPacketSize);
        const packet = parsers[header.id](view, header);
        if (packet !== null) {
            packets.push(packet);
        }
        pointer += F1PacketSizes[header.id];
    }

    // Return the packets.
    return packets;
}

interface F1PacketParser {
    (view: DataView, header: F1PacketHeader<F1PacketID>): F1Packet | null;
}

function noop(..._args: unknown[]): null {
    return null;
}

const parsers: Record<string, F1PacketParser | (() => null)> = {
    [F1MotionPacketID]: noop,
    [F1SessionPacketID]: noop,
    [F1LapDataPacketID]: noop,
    [F1EventPacketID]: parseEventPacket,
    [F1ParticipantsPacketID]: noop,
    [F1CarSetupsPacketID]: noop,
    [F1CarTelemetryPacketID]: noop,
    [F1CarStatusPacketID]: noop,
    [F1FinalClassificationPacketID]: noop,
    [F1LobbyInfoPacketID]: noop,
    [F1CarDamagePacketID]: noop,
    [F1SessionHistoryPacketID]: noop,
} as const;