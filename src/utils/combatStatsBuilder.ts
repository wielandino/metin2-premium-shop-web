import type { ArmoryEffect, ElementDamageBonusEffect, ElementDamgeResistenceBonusEffect, EnemyTypeDamageResistenceEffect } from "../api/types/Armory/ArmoryEffect";
import type { FightableUnit } from "../api/types/Unit/FightableUnit"
import type { CombatBonusValues, CombatStats } from "../models/Combat/CombatStats"
import type { MonsterType } from "../api/types/Enemy/MonsterType";
import type { ElementType } from "../api/types/Types/ElementType";

export interface ArmoryEffectStats {
    flatDamage: number;
    flatDefense: number;

    elements: Map<ElementType, BonusMultipliers>;
    enemies: Map<MonsterType, BonusMultipliers>;
}

export interface BonusMultipliers {
    damagePercentMultiplier: number;
    resistancePercentMultiplier: number;
}

export const buildCombatStats = (unit: FightableUnit): CombatStats => {

    const armoryEffectStats = buildStatsFromArmoryEffect(
        unit.armoryPieces.flatMap(p => [
            ...p.armoryBaseEffects ?? [],
            ...p.armoryEffects ?? [],
        ]));

    const totalDamage = unit.baseDamage + armoryEffectStats.flatDamage;
    const totalDefense = unit.baseDefense + armoryEffectStats.flatDefense;


    return {
        totalDamage: totalDamage,
        totalDefense: totalDefense,
        totalHealth: unit.baseHealth,

        bonusCombatStats: {
            elements: buildCombatBonusValues(
                armoryEffectStats.elements,
                totalDamage,
                totalDefense
            ),

            enemies: buildCombatBonusValues(
                armoryEffectStats.enemies,
                totalDamage,
                totalDefense
            )
        },

        elementType: unit.monsterUnit?.elementType ?? null,
        monsterType: unit.monsterUnit?.monsterType ?? null
    }
}

const sumBonus = (effects: ArmoryEffect[], effectType: string, effectIdentifier: string): number =>
    effects
        .filter(e => e != null && e.effectType === effectType && e.effectIdentifier === effectIdentifier)
        .reduce((sum, e) => sum + e.bonus, 0);

const buildCombatBonusValues = <TKey>(
    source: Map<TKey, BonusMultipliers>,
    totalDamage: number,
    totalDefense: number
): Map<TKey, CombatBonusValues> => {
    return new Map(
        [...source.entries()].map(([key, value]) => [
            key,
            {
                damage:
                    totalDamage *
                    (value.damagePercentMultiplier / 100),

                resistance:
                    totalDefense *
                    (value.resistancePercentMultiplier / 100),
            }
        ])
    )
}

const sumTypeBonus = <TEffect extends ArmoryEffect, TKey>(
    effects: ArmoryEffect[],
    filter: (effect: ArmoryEffect) => effect is TEffect,
    getKey: (effect: TEffect) => TKey): Map<TKey, BonusMultipliers> => {
    const grouped = effects
        .filter(filter)
        .reduce((accumulator, current) => {

            const key = getKey(current);

            let values = accumulator.get(key);

            if (!values) {
                values = {
                    damagePercentMultiplier: 0,
                    resistancePercentMultiplier: 0,
                };

                accumulator.set(key, values);
            }

            switch (current.effectType) {
                case 'damage':
                    values.damagePercentMultiplier += current.bonus;
                    break;

                case 'resistence':
                    values.resistancePercentMultiplier += current.bonus;
                    break;
            }

            return accumulator;
        }, new Map<TKey, BonusMultipliers>())

    return grouped;
}

const isElementEffect = (effect: ArmoryEffect): effect is ElementDamageBonusEffect | ElementDamgeResistenceBonusEffect =>
    effect.effectIdentifier === "element";

const isEnemyEffect = (effect: ArmoryEffect): effect is EnemyTypeDamageResistenceEffect =>
    effect.effectIdentifier === "enemy";

const buildStatsFromArmoryEffect = (effects: ArmoryEffect[]): ArmoryEffectStats => ({
    flatDamage: sumBonus(effects, 'damage', 'flat'),
    flatDefense: sumBonus(effects, 'resistence', 'flat'),
    elements: sumTypeBonus(effects, isElementEffect, e => e.elementType),
    enemies: sumTypeBonus(effects, isEnemyEffect, e => e.enemyType)

});