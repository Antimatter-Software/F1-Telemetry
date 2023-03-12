
export const F1DriveThroughPenaltyType = 0;
export const F1StopGoPenaltyType = 1;
export const F1GridPenaltyType = 2;
export const F1ReminderPenaltyType = 3;
export const F1TimePenaltyType = 4;
export const F1WarningPenaltyType = 5;
export const F1DisqualifiedPenaltyType = 6;
export const F1RemovedFromFormationLapPenaltyType = 7;
export const F1ParkedPenaltyType = 8;
export const F1TyreRegulationPenaltyType = 9;
export const F1LapInvalidatedPenaltyType = 10;
export const F1ThisAndNextLapInvalidatedPenaltyType = 11;
export const F1InvalidatedNoReasonPenaltyType = 12;
export const F1ThisAndNextLapInvalidatedNoReasonPenaltyType = 13;
export const F1ThisAndPreviousLapInvalidatedPenaltyType = 14;
export const F1ThisAndPreviousLapInvalidatedNoReasonPenaltyType = 15;
export const F1RetiredPenaltyType = 16;
export const F1BlackFlagPenaltyType = 17;

export type F1PenaltyType =
    | typeof F1DriveThroughPenaltyType
    | typeof F1StopGoPenaltyType
    | typeof F1GridPenaltyType
    | typeof F1ReminderPenaltyType
    | typeof F1TimePenaltyType
    | typeof F1WarningPenaltyType
    | typeof F1DisqualifiedPenaltyType
    | typeof F1RemovedFromFormationLapPenaltyType
    | typeof F1ParkedPenaltyType
    | typeof F1TyreRegulationPenaltyType
    | typeof F1LapInvalidatedPenaltyType
    | typeof F1ThisAndNextLapInvalidatedPenaltyType
    | typeof F1InvalidatedNoReasonPenaltyType
    | typeof F1ThisAndNextLapInvalidatedNoReasonPenaltyType
    | typeof F1ThisAndPreviousLapInvalidatedPenaltyType
    | typeof F1ThisAndPreviousLapInvalidatedNoReasonPenaltyType
    | typeof F1RetiredPenaltyType
    | typeof F1BlackFlagPenaltyType;

export const F1BlockingSlowInfringementType = 0;
export const F1BlockingWrongWayInfringementType = 1;
export const F1ReversingOffStartingLineInfringementType = 2;
export const F1BigCollisionInfringementType = 3;
export const F1SmallCollisionInfringementType = 4;
export const F1CollisionFailedToHandBackSingleInfringementType = 5;
export const F1CollisionFailedToHandBackMultipleInfringementType = 6;
export const F1CornerCuttingGainedTimeInfringementType = 7;
export const F1OvertakeSingleInfringementType = 8;
export const F1OvertakeMultipleInfringementType = 9;
export const F1CrossedPitExitLineInfringementType = 10;
export const F1IgnoringBlueFlagsInfringementType = 11;
export const F1IgnoringYellowFlagsInfringementType = 12;
export const F1IgnoringDriveThroughInfringementType = 13;
export const F1TooManyDriveThroughInfringementType = 14;
export const F1DriveThroughReminderNLapsInfringementType = 15;
export const F1DriveThroughReminderThisLapInfringementType = 16;
export const F1PitLaneSpeedingInfringementType = 17;
export const F1ParkedTooLongInfringementType = 18;
export const F1IgnoringTyreRegulationInfringementType = 19;
export const F1TooManyPenaltiesInfringementType = 20;
export const F1MultipleWarningsInfringementType = 21;
export const F1ApproachingDisqualificationInfringementType = 22;
export const F1TypeRegulationSingleInfringementType = 23;
export const F1TypeRegulationMultipleInfringementType = 24;
export const F1LapInvalidatedFlashbackUsedInfringementType = 25;
export const F1LapInvalidatedRunningWideInfringementType = 26;
export const F1CornerCuttingRanWideMinorGainInfringementType = 27;
export const F1CornerCuttingRanWideMajorGainInfringementType = 28;
export const F1CornerCuttingRanWideExtremeGainInfringementType = 29;
export const F1LapInvalidatedWallRidingInfringementType = 30;
export const F1LapInvalidatedCornerCuttingInfringementType = 31;
export const F1LapInvalidatedResetToTrackInfringementType = 32;
export const F1BlockingPitLaneInfringementType = 33;
export const F1JumpStartInfringementType = 34;
export const F1SafetyCarCollisionInfringementType = 35;
export const F1SafetyCarOvertakeInfringementType = 36;
export const F1SafetyCarExceedingAllowedPaceInfringementType = 37;
export const F1VirtualSafetyCarExceedingAllowedPaceInfringementType = 38;
export const F1FormationLapBelowAllowedSpeedInfringementType = 39;
export const F1FormationLapParkingInfringementType = 40;
export const F1RetiredMechanicalFailureInfringementType = 41;
export const F1RetiredTerminallyDamagedInfringementType = 42;
export const F1SafetyCarFallingBackTooFarInfringementType = 43;
export const F1BlackFlagInfringementType = 44;
export const F1UnservedStopGoPenaltyInfringementType = 45;
export const F1UnservedDriveThroughPenaltyInfringementType = 46;
export const F1EngineComponentChangeInfringementType = 47;
export const F1GearboxChangeInfringementType = 48;
export const F1ParcFermeChangeInfringementType = 49;
export const F1LeagueGridPenaltyInfringementType = 50;
export const F1RetryPenaltyInfringementType = 51;
export const F1IllegalTimeGainInfringementType = 52;
export const F1MandatoryPitStopInfringementType = 53;
export const F1AttributeAssignedInfringementType = 54;

export type F1InfringementType =
    | typeof F1BlockingSlowInfringementType
    | typeof F1BlockingWrongWayInfringementType
    | typeof F1ReversingOffStartingLineInfringementType
    | typeof F1BigCollisionInfringementType
    | typeof F1SmallCollisionInfringementType
    | typeof F1CollisionFailedToHandBackSingleInfringementType
    | typeof F1CollisionFailedToHandBackMultipleInfringementType
    | typeof F1CornerCuttingGainedTimeInfringementType
    | typeof F1OvertakeSingleInfringementType
    | typeof F1OvertakeMultipleInfringementType
    | typeof F1CrossedPitExitLineInfringementType
    | typeof F1IgnoringBlueFlagsInfringementType
    | typeof F1IgnoringYellowFlagsInfringementType
    | typeof F1IgnoringDriveThroughInfringementType
    | typeof F1TooManyDriveThroughInfringementType
    | typeof F1DriveThroughReminderNLapsInfringementType
    | typeof F1DriveThroughReminderThisLapInfringementType
    | typeof F1PitLaneSpeedingInfringementType
    | typeof F1ParkedTooLongInfringementType
    | typeof F1IgnoringTyreRegulationInfringementType
    | typeof F1TooManyPenaltiesInfringementType
    | typeof F1MultipleWarningsInfringementType
    | typeof F1ApproachingDisqualificationInfringementType
    | typeof F1TypeRegulationSingleInfringementType
    | typeof F1TypeRegulationMultipleInfringementType
    | typeof F1LapInvalidatedFlashbackUsedInfringementType
    | typeof F1LapInvalidatedRunningWideInfringementType
    | typeof F1CornerCuttingRanWideMinorGainInfringementType
    | typeof F1CornerCuttingRanWideMajorGainInfringementType
    | typeof F1CornerCuttingRanWideExtremeGainInfringementType
    | typeof F1LapInvalidatedWallRidingInfringementType
    | typeof F1LapInvalidatedCornerCuttingInfringementType
    | typeof F1LapInvalidatedResetToTrackInfringementType
    | typeof F1BlockingPitLaneInfringementType
    | typeof F1JumpStartInfringementType
    | typeof F1SafetyCarCollisionInfringementType
    | typeof F1SafetyCarOvertakeInfringementType
    | typeof F1SafetyCarExceedingAllowedPaceInfringementType
    | typeof F1VirtualSafetyCarExceedingAllowedPaceInfringementType
    | typeof F1FormationLapBelowAllowedSpeedInfringementType
    | typeof F1FormationLapParkingInfringementType
    | typeof F1RetiredMechanicalFailureInfringementType
    | typeof F1RetiredTerminallyDamagedInfringementType
    | typeof F1SafetyCarFallingBackTooFarInfringementType
    | typeof F1BlackFlagInfringementType
    | typeof F1UnservedStopGoPenaltyInfringementType
    | typeof F1UnservedDriveThroughPenaltyInfringementType
    | typeof F1EngineComponentChangeInfringementType
    | typeof F1GearboxChangeInfringementType
    | typeof F1ParcFermeChangeInfringementType
    | typeof F1LeagueGridPenaltyInfringementType
    | typeof F1RetryPenaltyInfringementType
    | typeof F1IllegalTimeGainInfringementType
    | typeof F1MandatoryPitStopInfringementType
    | typeof F1AttributeAssignedInfringementType;
