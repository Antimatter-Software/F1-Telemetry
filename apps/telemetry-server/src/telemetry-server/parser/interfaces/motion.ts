import type {F1PacketHeader} from "./header";
import type {F1MotionPacketID} from "./id";

/** Packet used to describe the motion of a car on track. */
export interface F1CarMotionPacket {
    /** Position of the player car in the world. */
    position: [x: number, y: number, z: number];
    /** Velocity of the player car in the world. */
    velocity: [x: number, y: number, z: number];
    /** Direction of the world-space forward vector from the user's car perspective. */
    forward: [x: number, y: number, z: number];
    /** Direction of the world-space right vector from the user's car perspective. */
    right: [x: number, y: number, z: number];
    /** G-Force applied to the user's car in local coordinates. */
    gForce: [x: number, y: number, z: number];
    /** Rotation of the car in radians. */
    rotation: [yaw: number, pitch: number, roll: number];
}

/** Data packet used to describe the motion data of all the cars on track. */
export interface F1MotionDataPacket extends F1PacketHeader<typeof F1MotionPacketID> {
    /** Motion data for all the cars on track. */
    data: F1CarMotionPacket[];

    /** Position of the player car's suspensions. */
    suspensionPosition: [rl: number, rr: number, fl: number, fr: number];
    /** Velocity of the player car's suspensions. */
    suspensionVelocity: [rl: number, rr: number, fl: number, fr: number];
    /** Acceleration of the player car's suspensions. */
    suspensionAcceleration: [rl: number, rr: number, fl: number, fr: number];

    /** Speed of every wheel on the player's car. */
    wheelSpeed: [rl: number, rr: number, fl: number, fr: number];
    /** Slip of every wheel on the player's car. */
    wheelSlip: [rl: number, rr: number, fl: number, fr: number];

    /** Velocity of the player car in local space. */
    localVelocity: [x: number, y: number, z: number];
    /** Angular velocity of the player car. */
    angularVelocity: [x: number, y: number, z: number];
    /** Angular acceleration of the player car. */
    angularAcceleration: [x: number, y: number, z: number];

    /** Angle at which the front wheels are facing. */
    frontWheelsAngle: number;
}