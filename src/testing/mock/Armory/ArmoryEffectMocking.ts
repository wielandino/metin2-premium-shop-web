import type { FlatDamageBonusEffect, ElementDamageBonusEffect, ElementDamgeResistenceBonusEffect, EnemyTypeDamageResistenceEffect, FlatDamageResistenceEffect } from "../../../api/types/Armory/ArmoryEffect";

const DUMMY_ID = 23;

export const MOCK_ARMORY_EFFECT_FLAT_DAMAGE: FlatDamageBonusEffect = {
    name: "Angriffswert",
    id: DUMMY_ID + 1,
    bonus: 10,
    effectType: 'damage',
    effectIdentifier: 'flat'
}

export const MOCK_ARMORY_EFFECT_FLAT_RESISTANCE_EFFECT: FlatDamageResistenceEffect = {
    bonus: 10,
    id: DUMMY_ID + 2,
    name: 'Verteidigung',
    effectIdentifier: 'flat',
    effectType: 'resistence'   
}

export const MOCK_ARMORY_EFFECT_FLAT_DAMAGE_RESISTANCE_EFFECT: EnemyTypeDamageResistenceEffect = {
    name: "Abwehr gegen Insekten",
    id: DUMMY_ID + 11,
    effectType: 'resistence',
    effectIdentifier: 'enemy',
    enemyType: 'insect',
    bonus: 5,
}

export const MOCK_ARMORY_EFFECT_ELEMENT_DAMAGE_FIRE: ElementDamageBonusEffect = {
    name: "Feuerschaden",
    id: DUMMY_ID + 111,
    effectType: 'damage',
    effectIdentifier: 'element',
    elementType: 'fire',
    bonus: 13   
}

export const MOCK_ARMORY_EFFECT_ELEMENT_RESISTENCE_LIGHT: ElementDamgeResistenceBonusEffect = {
    name: 'Abwehr gegen Blitz',
    id: DUMMY_ID + 1111,
    effectType: 'resistence',
    effectIdentifier: 'element',
    elementType: 'light',
    bonus: 7
}