export const F1ButtonSouth = 0x00000001;
export const F1ButtonNorth = 0x00000002;
export const F1ButtonEast = 0x00000004;
export const F1ButtonWest = 0x00000008;
export const F1ButtonDPadLeft = 0x00000010;
export const F1ButtonDPadRight = 0x00000020;
export const F1ButtonDPadUp = 0x00000040;
export const F1ButtonDPadDown = 0x00000080;
export const F1ButtonStart = 0x00000100;
export const F1ButtonLeftBumper = 0x00000200;
export const F1ButtonRightBumper = 0x00000400;
export const F1ButtonLeftTrigger = 0x00000800;
export const F1ButtonRightTrigger = 0x00001000;
export const F1ButtonLeftStickClick = 0x00002000;
export const F1ButtonRightStickClick = 0x00004000;
export const F1ButtonRightStickLeft = 0x00008000;
export const F1ButtonRightStickRight = 0x00010000;
export const F1ButtonRightStickUp = 0x00020000;
export const F1ButtonRightStickDown = 0x00040000;
export const F1ButtonSpecial = 0x00080000;
export const F1ButtonUPDAction1 = 0x00100000;
export const F1ButtonUPDAction2 = 0x00200000;
export const F1ButtonUPDAction3 = 0x00400000;
export const F1ButtonUPDAction4 = 0x00800000;
export const F1ButtonUPDAction5 = 0x01000000;
export const F1ButtonUPDAction6 = 0x02000000;
export const F1ButtonUPDAction7 = 0x04000000;
export const F1ButtonUPDAction8 = 0x08000000;
export const F1ButtonUPDAction9 = 0x10000000;
export const F1ButtonUPDAction10 = 0x20000000;
export const F1ButtonUPDAction11 = 0x40000000;
export const F1ButtonUPDAction12 = 0x80000000;

/** Union of all the supported button bit flags. */
export type F1Button =
    | typeof F1ButtonSouth
    | typeof F1ButtonNorth
    | typeof F1ButtonEast
    | typeof F1ButtonWest
    | typeof F1ButtonDPadLeft
    | typeof F1ButtonDPadRight
    | typeof F1ButtonDPadUp
    | typeof F1ButtonDPadDown
    | typeof F1ButtonStart
    | typeof F1ButtonLeftBumper
    | typeof F1ButtonRightBumper
    | typeof F1ButtonLeftTrigger
    | typeof F1ButtonRightTrigger
    | typeof F1ButtonLeftStickClick
    | typeof F1ButtonRightStickClick
    | typeof F1ButtonRightStickLeft
    | typeof F1ButtonRightStickRight
    | typeof F1ButtonRightStickUp
    | typeof F1ButtonRightStickDown
    | typeof F1ButtonSpecial
    | typeof F1ButtonUPDAction1
    | typeof F1ButtonUPDAction2
    | typeof F1ButtonUPDAction3
    | typeof F1ButtonUPDAction4
    | typeof F1ButtonUPDAction5
    | typeof F1ButtonUPDAction6
    | typeof F1ButtonUPDAction7
    | typeof F1ButtonUPDAction8
    | typeof F1ButtonUPDAction9
    | typeof F1ButtonUPDAction10
    | typeof F1ButtonUPDAction11
    | typeof F1ButtonUPDAction12;
