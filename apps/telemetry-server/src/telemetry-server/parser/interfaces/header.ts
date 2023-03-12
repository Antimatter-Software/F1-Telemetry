import type {F1PacketID} from "./id";
import {
    F1CarDamagePacketID,
    F1CarSetupsPacketID, F1CarStatusPacketID, F1CarTelemetryPacketID,
    F1EventPacketID, F1FinalClassificationPacketID,
    F1LapDataPacketID, F1LobbyInfoPacketID,
    F1MotionPacketID,
    F1ParticipantsPacketID, F1SessionHistoryPacketID,
    F1SessionPacketID
} from "./id";


/** Header of all the telemetry packets. */
export interface F1PacketHeader<T extends F1PacketID> {
    /**
     * The format of the packet.
     * Only {@code 2022} is supported for now.
     */
    format: number;

    /** The complete version of the game instance. */
    gameVersion: string;
    /** The version used by this packet. */
    packetVersion: string;

    /** Identifier of the packet type. */
    id: T;
    /** UUID of the current session. */
    session: string;
    /** Timestamp of the packet, since the start of the session. */
    timestamp: number;
    /** The game frame that this packed was emitted on. */
    frame: number;
    /** The index of the player's car. */
    playerCarIndex: number;
    /**
     * The index of the secondary player's car.
     * Set to {@link F1UndefinedCarIndex} if there is no secondary player.
     */
    secondaryPlayerCarIndex: number;
}

/** Union of all the possible {@link F1PacketHeader}. */
export type AnyF1PacketHeader =
    | F1PacketHeader<typeof F1MotionPacketID>
    | F1PacketHeader<typeof F1SessionPacketID>
    | F1PacketHeader<typeof F1LapDataPacketID>
    | F1PacketHeader<typeof F1EventPacketID>
    | F1PacketHeader<typeof F1ParticipantsPacketID>
    | F1PacketHeader<typeof F1CarSetupsPacketID>
    | F1PacketHeader<typeof F1CarTelemetryPacketID>
    | F1PacketHeader<typeof F1CarStatusPacketID>
    | F1PacketHeader<typeof F1FinalClassificationPacketID>
    | F1PacketHeader<typeof F1LobbyInfoPacketID>
    | F1PacketHeader<typeof F1CarDamagePacketID>
    | F1PacketHeader<typeof F1SessionHistoryPacketID>;

/** Value of the {@link F1PacketHeader.format} field. */
export const F1PacketFormat2022 = 2022;

/** Index of the car when the value should not be parsed. */
export const F1UndefinedCarIndex = 255;