export interface FightSequenceDetail {
    rounds: FightSequenceRoundDetails[]
}

export interface FightSequenceRoundDetails {
    round: number,
    winnerDamage: number,
    loserDamage: number

    winnerRemainingHp: number;
    loserRemainingHp: number;
}