import type { FightableUnit } from "../api/types/Unit/FightableUnit";
import type { FightSequenceDetail } from "../models/FightSequence/FightSequenceDetail";
import { buildCombatStats } from "./combatStatsBuilder";

export const buildFightSequenceDetail = (initiator: FightableUnit, enemy: FightableUnit, isInitiatorWinner: boolean): FightSequenceDetail => {

    const initiatorCombatStats = buildCombatStats(initiator);
    const enemyCombatStats = buildCombatStats(enemy);

    const initiatorTotalHealth = initiatorCombatStats.totalHealth;
    const enemyTotalHealth = enemyCombatStats.totalHealth;

    const initiatorTotalDamagePerRound = Math.floor(initiatorCombatStats.totalDamage - enemyCombatStats.totalDefence)
    const enemyTotalDamagePerRound = Math.floor(enemyCombatStats.totalDamage - enemyCombatStats.totalDefence)

    const roundCount = Math.round(enemyTotalHealth / initiatorTotalDamagePerRound)

    let initiatorRemainingHealth = initiatorTotalHealth;
    let enemyRemainingHealth = enemyTotalHealth;

    const rounds = Array.from({ length: roundCount }, (_, i) => {
        const initiatorDamage = Math.floor(rangeNumber(initiatorTotalDamagePerRound / 1.1, initiatorTotalDamagePerRound));
        const enemyDamage = Math.floor(rangeNumber(enemyTotalDamagePerRound / 1.1, enemyTotalDamagePerRound));


        initiatorRemainingHealth -= enemyDamage;
        enemyRemainingHealth -= initiatorDamage;

        return {
            round: i + 1,
            initiatorDamage: initiatorDamage,
            enemyDamage: enemyDamage,

            initiatorRemainingHealth: initiatorRemainingHealth,
            enemyRemainingHealth: enemyRemainingHealth
        };
    });

    return {
        rounds: rounds,
        initiatorTotalHealth: initiatorTotalHealth,
        enemyTotalHealth: enemyTotalHealth
    }
};

const rangeNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

