import {AnyF1PacketHeader} from "./interfaces/header";
import {F1PacketID} from "./interfaces/id";


/** Parses a header packet from the given dataview object. */
export default function parsePacketHeader(from: DataView): AnyF1PacketHeader {
    // Read the data from the header of the packet.
    const format = from.getUint16(0, true);
    const versionMajor = from.getUint8(2);
    const versionMinor = from.getUint8(3);
    const packetVersion = from.getUint8(4);
    const packetID = from.getUint8(5);
    const sessionUID = from.getBigUint64(6, true).toString(16);
    const time = from.getFloat32(14, true);
    const frame = from.getUint32(18, true);
    const playerCarIndex = from.getUint8(22);
    const secondaryPlayerCarIndex = from.getUint8(23);

    // Validate the parsed values.
    if (format !== 2022) {
        throw new TypeError(`Invalid packet format ${format}. Should be 2022`);
    }
    if (packetID > 11) {
        throw new TypeError(`Invalid packet id ${packetID}. Should be between 0 and 11 (inclusive)`);
    }

    // Return the packet header.
    return {
        format,
        gameVersion: `${versionMajor}.${versionMinor}`,
        packetVersion: `1.${packetVersion}`,
        id: packetID as F1PacketID,
        session: sessionUID,
        timestamp: time,
        frame,
        playerCarIndex,
        secondaryPlayerCarIndex,
    }
}

/** Size (in bytes) of the F1 header packet. */
export const F1HeaderPacketSize = 24;