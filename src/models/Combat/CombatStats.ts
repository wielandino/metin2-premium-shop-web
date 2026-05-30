import type { MonsterType } from "../../api/types/Enemy/MonsterType";
import type { ElementType } from "../../api/types/Types/ElementType";

export interface CombatStats {

    totalDefense: number;
    totalHealth: number;
    totalDamage: number;

    bonusCombatStats: BonusCombatStats;

    monsterType: MonsterType | null;
    elementType: ElementType | null;
}

export interface BonusCombatStats {
    elements: Map<ElementType, CombatBonusValues>;
    enemies: Map<MonsterType, CombatBonusValues>;
}

export interface CombatBonusValues {
    damage: number;
    resistance: number;
}