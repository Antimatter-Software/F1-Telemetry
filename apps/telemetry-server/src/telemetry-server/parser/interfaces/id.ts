
/** Motion data for the player's car. */
export const F1MotionPacketID = 0;
/** Data about the session. */
export const F1SessionPacketID = 1;
/** Lap times of the cars in a session. */
export const F1LapDataPacketID = 2;
/** Notable events that happen during a session. */
export const F1EventPacketID = 3;
/** List of the participants in the session. */
export const F1ParticipantsPacketID = 4;
/** Details about car setups. */
export const F1CarSetupsPacketID = 5;
/** Telemetry data for all the cars in a session. */
export const F1CarTelemetryPacketID = 6;
/** Status data for all the cars. */
export const F1CarStatusPacketID = 7;
/** Final classification at the end of a race. */
export const F1FinalClassificationPacketID = 8;
/** Information about multiplayer lobbies. */
export const F1LobbyInfoPacketID = 9;
/** Damage status for all the cars. */
export const F1CarDamagePacketID = 10;
/** Lap and tire data for the session. */
export const F1SessionHistoryPacketID = 11;

/** Union of all the supported packet identifiers. */
export type F1PacketID =
    | typeof F1MotionPacketID
    | typeof F1SessionPacketID
    | typeof F1LapDataPacketID
    | typeof F1EventPacketID
    | typeof F1ParticipantsPacketID
    | typeof F1CarSetupsPacketID
    | typeof F1CarTelemetryPacketID
    | typeof F1CarStatusPacketID
    | typeof F1FinalClassificationPacketID
    | typeof F1LobbyInfoPacketID
    | typeof F1CarDamagePacketID
    | typeof F1SessionHistoryPacketID;