import type {F1MotionDataPacket} from "./motion";
import type {F1EventPacket} from "./event";
import type {F1LapDataPacket} from "./lap-data";

export type F1Packet = F1MotionDataPacket | F1LapDataPacket | F1EventPacket;