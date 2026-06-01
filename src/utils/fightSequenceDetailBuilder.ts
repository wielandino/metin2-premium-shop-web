import type { FightableUnit } from "../api/types/Unit/FightableUnit";
import type { FightSequenceDetail } from "../models/FightSequence/FightSequenceDetail";
import { buildCombatStats } from "./combatStatsBuilder";

export const buildFightSequenceDetail = (initiator: FightableUnit, enemy: FightableUnit, isInitiatorWinner: boolean): FightSequenceDetail => {

    const [winner, loser] = isInitiatorWinner
        ? [buildCombatStats(initiator), buildCombatStats(enemy)]
        : [buildCombatStats(enemy), buildCombatStats(initiator)];

    const winnerHp = winner.totalHealth;
    const loserHp = loser.totalHealth;

    const winnerTotalDamagePerRound = Math.floor(winner.totalDamage - loser.totalDefence)
    const loserTotalDamagePerRound = Math.floor(loser.totalDamage - winner.totalDefence)

    const roundCount = Math.round(loserHp / winnerTotalDamagePerRound)

    let winnerRemainingHp = winnerHp;
    let loserRemainingHp = loserHp;

    const rounds = Array.from({ length: roundCount }, (_, i) => {
        const winnerDamage = Math.floor(rangeNumber(winnerTotalDamagePerRound / 1.1, winnerTotalDamagePerRound));
        const loserDamage = Math.floor(rangeNumber(loserTotalDamagePerRound / 1.1, loserTotalDamagePerRound));

        winnerRemainingHp -= loserDamage;
        loserRemainingHp -= winnerDamage;

        return {
            round: i + 1,
            winnerDamage,
            loserDamage,

            winnerRemainingHp: winnerRemainingHp,
            loserRemainingHp: loserRemainingHp
        };
    });

    return {
        rounds: rounds,
    }
};

const rangeNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

