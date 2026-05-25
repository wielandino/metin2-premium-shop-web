import type { DamageEffect, DamageResistenceEffect, ElementBonusDamage } from "../../api/types/Armory/ArmoryEffect";

const DUMMY_ID = 23;

export const MOCK_ARMORY_EFFECT_FLAT_DAMAGE: DamageEffect = {
    name: "Angriffswert",
    id: DUMMY_ID + 1,
    bonus: 10,
    type: 'damage'
}

export const MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT: DamageResistenceEffect = {
    name: "Abwehr gegen Insekten",
    id: DUMMY_ID + 1,
    type: 'damage_resistence_effect',
    enemyType: 'insect',
    bonus: 5,
}

export const MOCK_ARMORY_EFFECT_ELEMENT_BONUS: ElementBonusDamage = {
    name: "Angriffswert auf Blitz",
    id: DUMMY_ID + 3,
    type: 'element_damage',
    elementType: 'lightning',
    bonus: 15,
}