import {F1PacketHeader} from "./header";
import {F1LapDataPacketID} from "./id";

/** The value of the {@link F1PitStatus} flag when not in the pit-lane. */
export const F1PitStatusNone = 0;
/** The value of the {@link F1PitStatus} flag when currently in the pit-lane. */
export const F1PitStatusInPitLane = 1;
/** The value of the {@link F1PitStatus} flag when currently in the pit-box. */
export const F1PitStatusInPitArea = 2;
/** The current pit-lane status of a given car. */
export type F1PitStatus =
    | typeof F1PitStatusNone
    | typeof F1PitStatusInPitLane
    | typeof F1PitStatusInPitArea;

/** The value of the {@link F1DriverStatus} when the driver is in the garage. */
export const F1DriverInGarage = 0;
/** The value of the {@link F1DriverStatus} when the driver is on a flying lap. */
export const F1DriverFlyingLap = 1;
/** The value of the {@link F1DriverStatus} when the driver is on an in lap. */
export const F1DriverInLap = 2;
/** The value of the {@link F1DriverStatus} when the driver is on an out lap. */
export const F1DriverOutLap = 3;
/** The value of the {@link F1DriverStatus} when the driver is out on the track. */
export const F1DriverOnTrack = 4;
/** The current status of a given driver. */
export type F1DriverStatus =
    | typeof F1DriverInGarage
    | typeof F1DriverFlyingLap
    | typeof F1DriverInLap
    | typeof F1DriverOutLap
    | typeof F1DriverOnTrack;

/** The value of the {@link F1ResultStatus} when a car is invalid. */
export const F1ResultInvalid = 0;
/** The value of the {@link F1ResultStatus} when a car is inactive. */
export const F1ResultInactive = 1;
/** The value of the {@link F1ResultStatus} when a car is active. */
export const F1ResultActive = 2;
/** The value of the {@link F1ResultStatus} when a car has finished. */
export const F1ResultFinished = 3;
/** The value of the {@link F1ResultStatus} when a car has not finished. */
export const F1ResultDidNotFinish = 4;
/** The value of the {@link F1ResultStatus} when a car was disqualified. */
export const F1ResultDisqualified = 5;
/** The value of the {@link F1ResultStatus} when a car was not classified. */
export const F1ResultNotClassified = 6;
/** The value of the {@link F1ResultStatus} when a car was retired. */
export const F1ResultRetired = 7;
/** The current results status of a given car. */
export type F1ResultStatus =
    | typeof F1ResultInvalid
    | typeof F1ResultInactive
    | typeof F1ResultActive
    | typeof F1ResultFinished
    | typeof F1ResultDidNotFinish
    | typeof F1ResultDisqualified
    | typeof F1ResultNotClassified
    | typeof F1ResultRetired;

/** The data of a given car's current lap. */
export interface F1LapData {
    /** The time of the previous lap, in milliseconds. */
    lastLapTimeMilliseconds: number;
    /** The time of the current lap, in milliseconds. */
    currentLapTimeMilliseconds: number;
    /** The time of current lap's first sector, in milliseconds. */
    sector1TimeMilliseconds: number;
    /** The time of current lap's second sector, in milliseconds. */
    sector2TimeMilliseconds: number;
    /** The time of current lap's third sector, in milliseconds. */
    sector3TimeMilliseconds: number;

    /** The distance of the car around the lap, in meters.  */
    lapDistanceMeters: number;
    /** The total distance travelled in the current session, in meters.  */
    totalDistanceMeters: number;
    /** The time delta for the safety car. */
    safetyCarDelta: number;

    /** Current car position in the field. */
    position: number;
    /** The number of the current lap. */
    currentLapNumber: number;
    /** The current pitting status of the car. */
    pitStatus: F1PitStatus;
    /** The number of pit stops made by this car in the session. */
    pitStopCount: number;
    /** The sector of the track that the car is currently in. (Sector 1 = 1, Sector2 = 2, Sector3 = 3). */
    sector: number;
    /** Flag set if the current lap time will be invalidated. */
    isCurrentLapInvalid: boolean;
    /** The total time penalties accrued by this car, in seconds. */
    timePenaltiesSeconds: number;
    /** The number of warnings accrued by this car. */
    warnings: number;
    /** The number of drive-through penalties left to serve for this car. */
    numberOfUnservedDriveThroughPenalties: number;
    /** The number of stop-go penalties left to serve for this car. */
    numberOfUnservedStopGoPenalties: number;
    /** The grid position that this car started the race in. */
    gridPosition: number;
    /** The status of the current driver. */
    driverStatus: F1DriverStatus;
    /** The status of the current car. */
    resultStatus: F1ResultStatus;
    /** Flag set if the pit laine timing is active. */
    isPitLaneTimerActive: boolean;
    /** The time spent while inside the pit lane. */
    pitLaneTimeInLaneMilliseconds: number;
    /** The time spent on the actual pit stop. */
    pitStopTimeMilliseconds: number;
    /** Flag set if the driver should serve a penalty at this stop. */
    shouldServePenaltyDuringPitStop: boolean;
}

/** Packet used to describe the lapping data of all the cars on the track. */
export interface F1LapDataPacket extends F1PacketHeader<typeof F1LapDataPacketID> {
    /** The lapping data for all the cars on track. */
    lapData: F1LapData[];

    /**
     * The index of the personal best car in time trial mode.
     * Set to {@see UndefinedCarIndex} when not applicable.
     */
    timeTrialPersonalBestCarIndex: number;

    /**
     * The index of the rival car in time trial mode.
     * Set to {@see UndefinedCarIndex} when not applicable.
     */
    timeTrialRivalCarIndex: number;
}