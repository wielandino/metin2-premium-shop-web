import type { ElementType } from "react";
import type { EnemyType } from "../Enemy/EnemyType";

export type ArmoryEffect = 
    DamageEffect | 
    DamageResistenceEffect | 
    ElementBonusDamage |
    ElementBonusResistence;

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

export interface ElementBonusResistence extends BaseEffect {
    type: 'element_resistence';
    bonus: number;
    elementType: ElementType;
}