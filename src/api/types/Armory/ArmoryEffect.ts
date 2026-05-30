import type { MonsterType } from "../Enemy/MonsterType";
import type { ElementType } from "../Types/ElementType";

export type ArmoryEffect =
    FlatDamageBonusEffect |
    FlatDamageResistenceEffect |
    ElementDamageBonusEffect |
    ElementDamgeResistenceBonusEffect |
    EnemyTypeDamageResistenceEffect;

interface BaseEffect {
    id: number;
    name: string;
    effectType: string;
}


export interface ElementDamageBonusEffect extends BaseEffect {
    effectType: 'damage';
    effectIdentifier: 'element';
    bonus: number;
    elementType: ElementType;
}

export interface ElementDamgeResistenceBonusEffect extends BaseEffect {
    effectType: 'resistence';
    effectIdentifier: 'element';
    bonus: number;
    elementType: ElementType;
}


//#region damage effects

export interface FlatDamageBonusEffect extends BaseEffect {
    effectType: 'damage';
    effectIdentifier: 'flat';
    bonus: number;
}

//#endregion

//#region resistence effects

export interface FlatDamageResistenceEffect extends BaseEffect {
    effectType: 'resistence';
    effectIdentifier: 'flat';
    bonus: number;
}

export interface EnemyTypeDamageResistenceEffect extends BaseEffect {
    effectType: 'resistence';
    effectIdentifier: 'enemy';
    bonus: number;
    enemyType: MonsterType;
}

//#endregion