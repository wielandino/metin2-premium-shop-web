import type { ArmoryPiece } from "../../../api/types/Armory/ArmoryPiece";
import { MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT, MOCK_ARMORY_EFFECT_ELEMENT_BONUS, MOCK_ARMORY_EFFECT_FLAT_DAMAGE } from "./ArmoryEffectMocking";

export const MOCK_ARMORY_CHEST_PIECE: ArmoryPiece = {
    name: "Mönchplattenpanzer",
    armoryBaseEffects: [],
    armoryEffects: [MOCK_ARMORY_EFFECT_DAMAGE_RESISTENCE_EFFECT, MOCK_ARMORY_EFFECT_ELEMENT_BONUS, MOCK_ARMORY_EFFECT_FLAT_DAMAGE, null],
    armoryType: "chest",
}

export const MOCK_ARMORY_WEAPON_PIECE: ArmoryPiece = {
    name: "Mönchsstab",
    armoryBaseEffects: [],
    armoryEffects: [MOCK_ARMORY_EFFECT_FLAT_DAMAGE, null, null, null],
    armoryType: "weapon",
}