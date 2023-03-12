import type {F1PacketHeader} from "./header";
import type {F1EventPacketID} from "./id";
import type {F1InfringementType, F1PenaltyType} from "./penalty";

/** A new session just started. */
export const F1SessionStartedEventType = "SSTA";
/** The current session just ended. */
export const F1SessionEndedEventType = "SEND";
/** A car set the new fastest lap of the session. */
export const F1FastestLapEventType = "FTLP";
/** A car retired from the session. */
export const F1RetirementEventType = "RTMT";
/** Stewards have enabled DRS. */
export const F1DRSEnabledEventType = "DRSE";
/** Stewards have disabled DRS. */
export const F1DRSDisabledEventType = "DRSD";
/** The player's teammate entered the pits. */
export const F1TeammateInPitsEventType = "TMPT";
/** The checkered flag was waved. */
export const F1CheckeredFlagEventType = "CHQF";
/** The race's winner was declared. */
export const F1RaceWinnerEventType = "RCWN";
/** A penalty was dispatched to a driver. */
export const F1PenaltyEventType = "PENA";
/** A driver triggered the speed trap. */
export const F1SpeedTrapEventType = "SPTP";
/** The start lights have come on. */
export const F1StartLightsEventType = "STLG";
/** The start lights have come off. */
export const F1LightsOutEventType = "LGOT";
/** A driver has served a drive-through penalty. */
export const F1DriveThroughServedEventType = "DTSV";
/** A driver has served a stop-go penalty. */
export const F1StopAndGoServedEventType = "SGSV";
/** The user triggered a flashback. */
export const F1FlashbackEventType = "FLBK";
/** A button was pressed. */
export const F1ButtonStatusEventType = "BUTN";

/** Union of all the F1 event packet types. */
export type F1EventType =
    | typeof F1SessionStartedEventType
    | typeof F1SessionEndedEventType
    | typeof F1FastestLapEventType
    | typeof F1RetirementEventType
    | typeof F1DRSEnabledEventType
    | typeof F1DRSDisabledEventType
    | typeof F1TeammateInPitsEventType
    | typeof F1CheckeredFlagEventType
    | typeof F1RaceWinnerEventType
    | typeof F1PenaltyEventType
    | typeof F1SpeedTrapEventType
    | typeof F1StartLightsEventType
    | typeof F1LightsOutEventType
    | typeof F1DriveThroughServedEventType
    | typeof F1StopAndGoServedEventType
    | typeof F1FlashbackEventType
    | typeof F1ButtonStatusEventType;

/** Base type for all the event packets that can be fired. */
interface F1Event<T extends F1EventType> extends F1PacketHeader<typeof F1EventPacketID> {
    /**
     * The type of the event.
     * @see F1EventType
     */
    type: T;
}

/** A new fastest lap of the session was distributed. */
export interface F1FastestLapEventPacket extends F1Event<typeof F1FastestLapEventType> {
    /** Index of the car that achieved the fastest-lap. */
    index: number;
    /** The time of the lap, in seconds. */
    timeSeconds: number;
}

/** A car retired from the session. */
export interface F1RetirementEventPacket extends F1Event<typeof F1RetirementEventType> {
    /** Index of the car that is retiring. */
    index: number;
}

/** The player's team-mate car has entered the pits. */
export interface F1TeammateInPitsEventPacket extends F1Event<typeof F1TeammateInPitsEventType> {
    /** Index of the car that is entering the pits. */
    index: number;
}

/** A car has just won the race. */
export interface F1RaceWinnerEventPacket extends F1Event<typeof F1RaceWinnerEventType> {
    /** Index of the car that won the race. */
    index: number;
}

/** A car just received a penalty from the stewards. */
export interface F1PenaltyEventPacket extends F1Event<typeof F1PenaltyEventType> {
    /** The type of penalty that was given. */
    penalty: F1PenaltyType;
    /** The type of infringement that caused the penalty. */
    infringement: F1InfringementType;
    /** Index of the car that received the penalty. */
    index: number;
    /** Index of the other car involved in the incident. */
    otherIndex: number;
    /** Time gained or spent doing the action. */
    time: number;
    /** Lap the penalty occurred on. */
    lap: number;
    /** Number of places gained in the incident. */
    placesGained: number;
}

/** A car just triggered the speed trap. */
export interface F1SpeedTrapEventPacket extends F1Event<typeof F1SpeedTrapEventType> {
    /** The index of the car that just triggered the speed trap. */
    index: number;
    /** The speed recorded by the speed trap, in kilometers per hour. */
    speedKph: number;
    /** Flag set if this was the fastest speed recorded in the session, across all cars. */
    isFastestInSession: boolean;
    /** Flag set if this was the fastest speed recorded in the session, for the driver that triggered it. */
    isDriverFastestInSession: boolean;
    /** The fastest speed recorded by the speed trap in the current session, in kilometers per hour. */
    fastestSpeedInSessionKph: number;
}

/** A new starting line has just come on the screen. */
export interface F1StartLightsEventPacket extends F1Event<typeof F1StartLightsEventType> {
    /** The number of lights that are one. */
    numberOfLights: number;
}

/** A car just served a drive-through penalty. */
export interface F1DriveThroughServedEventPacket extends F1Event<typeof F1DriveThroughServedEventType> {
    /** The index of the car that just served a drive-through penalty. */
    index: number;
}

/** A car just served a stop-go penalty. */
export interface F1StopAndGoServedEventPacket extends F1Event<typeof F1StopAndGoServedEventType> {
    /** The index of the car that just served a stop-go penalty. */
    index: number;
}

/** A flashback was triggered by the user. */
export interface F1FlashbackEventPacket extends F1Event<typeof F1FlashbackEventType> {
    /** Identifier of the frame that the user flashed back to. */
    flashbackFrameIndex: number;
    /** Time in the session that the user flashed-back to. */
    flashbackSessionTimeSeconds: number;
}

/** A button's status was changed. */
export interface F1ButtonStatusEventPacket extends F1Event<typeof F1ButtonStatusEventType> {
    /** Status of the west button. */
    west: boolean;
    /** Status of the east button. */
    east: boolean;
    /** Status of the north button. */
    north: boolean;
    /** Status of the south button. */
    south: boolean;
    /** Status of the left d-pad arrow. */
    dPadLeft: boolean;
    /** Status of the right d-pad arrow. */
    dPadRight: boolean;
    /** Status of the top d-pad arrow. */
    dPadUp: boolean;
    /** Status of the bottom d-pad arrow. */
    dPadDown: boolean;
    /** Status of the start button. */
    start: boolean;
    /** Status of the left bumper. */
    leftBumper: boolean;
    /** Status of the right bumper. */
    rightBumper: boolean;
    /** Status of the left trigger. */
    leftTrigger: boolean;
    /** Status of the right trigger. */
    rightTrigger: boolean;
    /** Status of the left stick click. */
    leftStickClick: boolean;
    /** Status of the right stick click. */
    rightStickClick: boolean;
    /** Set if the right stick is moving up. */
    rightStickRight: boolean;
    /** Set if the right stick is moving left. */
    rightStickLeft: boolean;
    /** Set if the right stick is moving up. */
    rightStickUp: boolean;
    /** Set if the right stick is moving down. */
    rightStickDown: boolean;
    /** Status of the special button. */
    special: boolean;
    /** Status of all the UDP action buttons. */
    udpActions: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];
}

/** Union of all the event packets. */
export type F1EventPacket =
    | F1Event<typeof F1SessionStartedEventType>
    | F1Event<typeof F1SessionEndedEventType>
    | F1FastestLapEventPacket
    | F1RetirementEventPacket
    | F1Event<typeof F1DRSEnabledEventType>
    | F1Event<typeof F1DRSDisabledEventType>
    | F1TeammateInPitsEventPacket
    | F1Event<typeof F1CheckeredFlagEventType>
    | F1RaceWinnerEventPacket
    | F1PenaltyEventPacket
    | F1SpeedTrapEventPacket
    | F1StartLightsEventPacket
    | F1Event<typeof F1LightsOutEventType>
    | F1DriveThroughServedEventPacket
    | F1StopAndGoServedEventPacket
    | F1FlashbackEventPacket
    | F1ButtonStatusEventPacket;
