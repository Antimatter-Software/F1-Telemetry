import type {F1PacketHeader} from "./interfaces/header";
import type {F1EventPacketID} from "./interfaces/id";
import type {F1EventPacket} from "./interfaces/event";
import {
    F1ButtonStatusEventType,
    F1CheckeredFlagEventType,
    F1DriveThroughServedEventType,
    F1DRSDisabledEventType,
    F1DRSEnabledEventType,
    F1FastestLapEventType,
    F1FlashbackEventType,
    F1LightsOutEventType,
    F1PenaltyEventType,
    F1RaceWinnerEventType,
    F1RetirementEventType,
    F1SessionEndedEventType,
    F1SessionStartedEventType,
    F1SpeedTrapEventType,
    F1StartLightsEventType,
    F1StopAndGoServedEventType,
    F1TeammateInPitsEventType
} from "./interfaces/event";
import {F1InfringementType, F1PenaltyType} from "./interfaces/penalty";
import {
    F1ButtonDPadDown,
    F1ButtonDPadLeft,
    F1ButtonDPadRight,
    F1ButtonDPadUp,
    F1ButtonEast,
    F1ButtonLeftBumper,
    F1ButtonLeftStickClick,
    F1ButtonLeftTrigger,
    F1ButtonNorth,
    F1ButtonRightBumper,
    F1ButtonRightStickClick,
    F1ButtonRightStickDown,
    F1ButtonRightStickLeft,
    F1ButtonRightStickRight,
    F1ButtonRightStickUp,
    F1ButtonRightTrigger,
    F1ButtonSouth,
    F1ButtonSpecial,
    F1ButtonStart,
    F1ButtonUPDAction1,
    F1ButtonUPDAction10,
    F1ButtonUPDAction11,
    F1ButtonUPDAction12,
    F1ButtonUPDAction2,
    F1ButtonUPDAction3,
    F1ButtonUPDAction4,
    F1ButtonUPDAction5,
    F1ButtonUPDAction6,
    F1ButtonUPDAction7,
    F1ButtonUPDAction8,
    F1ButtonUPDAction9,
    F1ButtonWest
} from "./interfaces/button";


/** Parses an event packet. */
export default function parseEventPacket(from: DataView, header: F1PacketHeader<typeof F1EventPacketID>): F1EventPacket {
    // Read the code of the event.
    const eventCode = Buffer.from(from.buffer.slice(from.byteOffset, from.byteOffset + 4)).toString("ascii");
    switch (eventCode) {
        case F1SessionStartedEventType:
        case F1SessionEndedEventType:
        case F1DRSEnabledEventType:
        case F1DRSDisabledEventType:
        case F1CheckeredFlagEventType:
        case F1LightsOutEventType:
            return {...header, type: eventCode};
        case F1FastestLapEventType:
            return {
                ...header,
                type: eventCode,
                index: from.getUint8(4),
                timeSeconds: from.getFloat32(5, true)
            };
        case F1RetirementEventType:
        case F1TeammateInPitsEventType:
        case F1RaceWinnerEventType:
        case F1DriveThroughServedEventType:
        case F1StopAndGoServedEventType:
            return {
                ...header,
                type: eventCode,
                index: from.getUint8(4),
            }
        case F1PenaltyEventType:
            return {
                ...header,
                type: eventCode,
                penalty: from.getUint8(4) as F1PenaltyType,
                infringement: from.getUint8(5) as F1InfringementType,
                index: from.getUint8(6),
                otherIndex: from.getUint8(7),
                time: from.getUint8(8),
                lap: from.getUint8(9),
                placesGained: from.getUint8(10),
            }
        case F1SpeedTrapEventType:
            return {
                ...header,
                type: eventCode,
                index: from.getUint8(4),
                speedKph: from.getFloat32(5, true),
                isFastestInSession: Boolean(from.getUint8(6)),
                isDriverFastestInSession: Boolean(from.getUint8(7)),
                fastestSpeedInSessionKph: from.getFloat32(8, true)
            }
        case F1StartLightsEventType:
            return {
                ...header,
                type: eventCode,
                numberOfLights: from.getUint8(4)
            };
        case F1FlashbackEventType:
            return {
                ...header,
                type: eventCode,
                flashbackFrameIndex: from.getUint32(4, true),
                flashbackSessionTimeSeconds: from.getFloat32(8, true),
            };
        case F1ButtonStatusEventType: {
            const status = from.getUint32(4);
            return {
                ...header,
                type: eventCode,
                west: Boolean(status & F1ButtonWest),
                east: Boolean(status & F1ButtonEast),
                north: Boolean(status & F1ButtonNorth),
                south: Boolean(status & F1ButtonSouth),
                dPadLeft: Boolean(status & F1ButtonDPadLeft),
                dPadRight: Boolean(status & F1ButtonDPadRight),
                dPadUp: Boolean(status & F1ButtonDPadUp),
                dPadDown: Boolean(status & F1ButtonDPadDown),
                start: Boolean(status & F1ButtonStart),
                leftBumper: Boolean(status & F1ButtonLeftBumper),
                rightBumper: Boolean(status & F1ButtonRightBumper),
                leftTrigger: Boolean(status & F1ButtonLeftTrigger),
                rightTrigger: Boolean(status & F1ButtonRightTrigger),
                leftStickClick: Boolean(status & F1ButtonLeftStickClick),
                rightStickClick: Boolean(status & F1ButtonRightStickClick),
                rightStickRight: Boolean(status & F1ButtonRightStickRight),
                rightStickLeft: Boolean(status & F1ButtonRightStickLeft),
                rightStickUp: Boolean(status & F1ButtonRightStickUp),
                rightStickDown: Boolean(status & F1ButtonRightStickDown),
                special: Boolean(status & F1ButtonSpecial),
                udpActions: [
                    Boolean(status & F1ButtonUPDAction1),
                    Boolean(status & F1ButtonUPDAction2),
                    Boolean(status & F1ButtonUPDAction3),
                    Boolean(status & F1ButtonUPDAction4),
                    Boolean(status & F1ButtonUPDAction5),
                    Boolean(status & F1ButtonUPDAction6),
                    Boolean(status & F1ButtonUPDAction7),
                    Boolean(status & F1ButtonUPDAction8),
                    Boolean(status & F1ButtonUPDAction9),
                    Boolean(status & F1ButtonUPDAction10),
                    Boolean(status & F1ButtonUPDAction11),
                    Boolean(status & F1ButtonUPDAction12),
                ]
            };
        }
        default:
            throw new TypeError(`Unknown event type "${eventCode}"`);
    }
}

/** Size (in bytes) of the F1 event packet. */
export const F1EventPacketSize = 40;