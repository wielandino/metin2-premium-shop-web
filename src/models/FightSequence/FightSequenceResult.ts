import type { FightSequenceDetail } from "./FightSequenceDetail";

export interface FightSequenceResult {
    isInitiatorWinner: boolean;
    fightSequenceDetail: FightSequenceDetail
}