export interface FightSequenceDetail {
    rounds: FightSequenceRoundDetails[]
    initiatorTotalHealth: number;
    enemyTotalHealth: number;
}

export interface FightSequenceRoundDetails {
    round: number,
    initiatorDamage: number,
    enemyDamage: number

    initiatorRemainingHealth: number;
    enemyRemainingHealth: number;
}