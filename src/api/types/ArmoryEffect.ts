import type { ElementType } from "./Types/ElementType";
import type { EnemyType } from "./Types/EnemyType";

export type ArmoryEffect = DamageEffect | DamageResistenceEffect | ElementBonusDamage;

interface BaseEffect {
    id: number;
    name: string;
}

export interface DamageEffect extends BaseEffect {
    type: 'damage';
    bonus: number;
}

export interface DamageResistenceEffect extends BaseEffect {
    type: 'damage_resistence_effect';
    bonus: number;
    enemyType: EnemyType;
}

export interface ElementBonusDamage extends BaseEffect {
    type: 'element_damage';
    bonus: number;
    elementType: ElementType;
}