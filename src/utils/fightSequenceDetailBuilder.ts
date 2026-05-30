import type { ArmoryEffect, ElementDamageBonusEffect, ElementDamgeResistenceBonusEffect, EnemyTypeDamageResistenceEffect } from "../api/types/Armory/ArmoryEffect";
import type { FightableUnit } from "../api/types/Unit/FightableUnit";
import type { ArmoryEffectStats, BonusValues, CombatStats } from "../models/Combat/CombatStats";


export const buildFightSequenceDetail = (initiator: FightableUnit, enemy: FightableUnit, isInitiatorWinner: boolean) => {
    // Every fighting sequence is already decided by the server by calculating the chance of winning or losing a fight
    // We need to implement a fake fight sequence for the frontend to something to show

    // Every Fight Sequence does have a n amount of rounds where damage is given and taken
    // Our function need to decide how many rounds should be build with what damage
    // The outcome always must favor the winner of this fight

    // For the start there should be 3 types of round lengths:
    // 1. Short Rounds (1-3): If the initiator or the enemy is way stronger than his opponent
    // 2. Medium Rounds (4-8): If the initiator or the enemy are slighty stronger than his opponent
    // 3. Long Rounds (9-12): If the initiator or the enemy is even or slightly weaker than his opponent

    const initiatorCombatStats = buildCombatStats(initiator);
    const enemyArmoryEffectStats = buildCombatStats(enemy);
}

const buildCombatStats = (unit: FightableUnit): CombatStats => ({
    armoryEffectStats: buildStatsFromArmoryEffect(
        unit.armoryPieces.flatMap(p => [
            ...p.armoryBaseEffects ?? [],
            ...p.armoryEffects ?? [],
        ])),

    baseDamage: unit.baseDamage,
    baseDefense: unit.baseDefense,
    baseHealth: unit.baseHealth
})

const sumBonus = (effects: ArmoryEffect[], effectType: string, effectIdentifier: string): number =>
    effects
        .filter(e => e != null && e.effectType === effectType && e.effectIdentifier === effectIdentifier)
        .reduce((sum, e) => sum + e.bonus, 0);

const sumTypeBonus = <TEffect extends ArmoryEffect, TKey>(
    effects: ArmoryEffect[],
    filter: (effect: ArmoryEffect) => effect is TEffect,
    getKey: (effect: TEffect) => TKey): Map<TKey, BonusValues> => {
    const grouped = effects
        .filter(filter)
        .reduce((accumulator, current) => {

            const key = getKey(current);

            let values = accumulator.get(key);

            if (!values) {
                values = {
                    damage: 0,
                    resistance: 0
                };

                accumulator.set(key, values);
            }

            switch (current.effectType) {
                case "damage":
                    values.damage += current.bonus;
                    break;

                case "resistence":
                    values.resistance += current.bonus;
                    break;
            }

            return accumulator;
        }, new Map<TKey, BonusValues>())

    return grouped;
}

const isElementEffect = (effect: ArmoryEffect): effect is ElementDamageBonusEffect | ElementDamgeResistenceBonusEffect =>
    effect.effectIdentifier === "element";

const isEnemyEffect = (effect: ArmoryEffect): effect is EnemyTypeDamageResistenceEffect =>
    effect.effectIdentifier === "enemy";

const buildStatsFromArmoryEffect = (effects: ArmoryEffect[]): ArmoryEffectStats => ({
    flatDamage: sumBonus(effects, 'damage', 'flat'),
    flatResistance: sumBonus(effects, 'resistence', 'flat'),
    bonusValues: {
        elements: sumTypeBonus(effects, isElementEffect, e => e.elementType),
        enemies: sumTypeBonus(effects, isEnemyEffect, e => e.enemyType)
    }
});
