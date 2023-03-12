import {
    F1CarDamagePacketID,
    F1CarSetupsPacketID, F1CarStatusPacketID, F1CarTelemetryPacketID,
    F1EventPacketID, F1FinalClassificationPacketID,
    F1LapDataPacketID, F1LobbyInfoPacketID,
    F1MotionPacketID,
    F1ParticipantsPacketID, F1SessionHistoryPacketID,
    F1SessionPacketID
} from "./id";

/** Map of all the packet sizes (including the header) for all the packet id types. */
export const F1PacketSizes = {
    [F1MotionPacketID]: 1464,
    [F1SessionPacketID]: 632,
    [F1LapDataPacketID]: 972,
    [F1EventPacketID]: 40,
    [F1ParticipantsPacketID]: 1257,
    [F1CarSetupsPacketID]: 1102,
    [F1CarTelemetryPacketID]: 1347,
    [F1CarStatusPacketID]: 1058,
    [F1FinalClassificationPacketID]: 1015,
    [F1LobbyInfoPacketID]: 1191,
    [F1CarDamagePacketID]: 948,
    [F1SessionHistoryPacketID]: 1155,
} as const;