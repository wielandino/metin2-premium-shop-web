import type { ArmoryPiece } from "../../../api/types/Armory/ArmoryPiece";
import { MOCK_ARMORY_EFFECT_FLAT_DAMAGE_RESISTANCE_EFFECT, MOCK_ARMORY_EFFECT_FLAT_DAMAGE, MOCK_ARMORY_EFFECT_ELEMENT_DAMAGE_FIRE, MOCK_ARMORY_EFFECT_ELEMENT_RESISTENCE_LIGHT, MOCK_ARMORY_EFFECT_FLAT_RESISTANCE_EFFECT, MOCK_ARMORY_EFFECT_ELEMENT_RESISTENCE_FIRE } from "./ArmoryEffectMocking";

export const MOCK_ARMORY_CHEST_PIECE: ArmoryPiece = {
    name: "Mönchplattenpanzer",
    armoryBaseEffects: [MOCK_ARMORY_EFFECT_FLAT_RESISTANCE_EFFECT],
    armoryEffects: [MOCK_ARMORY_EFFECT_FLAT_DAMAGE_RESISTANCE_EFFECT, MOCK_ARMORY_EFFECT_FLAT_DAMAGE, MOCK_ARMORY_EFFECT_ELEMENT_DAMAGE_FIRE, MOCK_ARMORY_EFFECT_ELEMENT_RESISTENCE_LIGHT],
    armoryType: "chest",
}

export const MOCK_ARMORY_WEAPON_PIECE: ArmoryPiece = {
    name: "Mönchsstab",
    armoryBaseEffects: [MOCK_ARMORY_EFFECT_FLAT_DAMAGE],
    armoryEffects: [MOCK_ARMORY_EFFECT_FLAT_DAMAGE],
    armoryType: "weapon",
}

export const MOCK_ARMORY_CHEST_PIECE_FIRE_RESISTENCE: ArmoryPiece = {
    name: 'Feuerrüstung',
    armoryBaseEffects: [MOCK_ARMORY_EFFECT_ELEMENT_RESISTENCE_FIRE],
    armoryEffects: [],
    armoryType: 'chest'
}