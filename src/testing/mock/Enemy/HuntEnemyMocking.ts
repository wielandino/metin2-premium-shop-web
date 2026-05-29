import type { HuntOption } from "../../../api/types/Hunt/HuntOption";

export const MOCK_HUNT_ENEMY_FIRE: HuntOption = {
    name: "Feuer-Metin",
    description: "Feuer & Gift. Herausfordernd, aber ohne Rüstung möglich.",
    elementType: "fire",
    type: "metin",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 100,
        baseDefense: 50,
        armoryPieces: []
    }
}

export const MOCK_HUNT_ENEMY_ICE: HuntOption = {
    name: "Eis-Metin",
    description: "Eis & Dunkelheit. Fordert passende Widerstände.",
    elementType: "ice",
    type: "metin",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 80,
        baseDefense: 70,
        armoryPieces: []
    }
}

export const MOCK_HUNT_ENEMY_LIGHTNING: HuntOption = {
    name: "Blitz-Metin",
    description: "Blitz, Dunkelheit & Feuer. Ohne Widerstand kaum zu besiegen.",
    elementType: "lightning",
    type: "metin",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 120,
        baseDefense: 60,
        armoryPieces: []
    }
}

export const mockHuntEnemies: HuntOption[] = [
    MOCK_HUNT_ENEMY_FIRE,
    MOCK_HUNT_ENEMY_ICE,
    MOCK_HUNT_ENEMY_LIGHTNING,
]