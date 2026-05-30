import type { EnemyType } from "../../api/types/Enemy/EnemyType";
import type { ElementType } from "../../api/types/Types/ElementType";

export interface CombatStats {
    armoryEffectStats: ArmoryEffectStats;
    baseDamage: number;
    baseDefense: number;
    baseHealth: number;
}

export interface ArmoryEffectStats {
    flatDamage: number;
    flatResistance: number;
    bonusValues: {
        elements: Map<ElementType, BonusValues>;
        enemies: Map<EnemyType, BonusValues>;
    };
}

export interface BonusValues {
    damage: number;
    resistance: number;
}