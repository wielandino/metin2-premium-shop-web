import type { HuntOption } from "../../../api/types/Hunt/HuntOption";

export const MOCK_HUNT_ENEMY_FIRE: HuntOption = {
    name: "Feuer-Metin",
    description: "Feuer & Gift. Herausfordernd, aber ohne Rüstung möglich.",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 100,
        baseDefense: 50,
        armoryPieces: [],
        monsterUnit: {
            elementType: 'fire',
            monsterType: 'metin'
        }
    }
}

export const MOCK_HUNT_ENEMY_ICE: HuntOption = {
    name: "Eis-Metin",
    description: "Eis & Dunkelheit. Fordert passende Widerstände.",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 80,
        baseDefense: 70,
        armoryPieces: [],
        monsterUnit: {
            elementType: 'ice',
            monsterType: 'metin'
        }
    }
}

export const MOCK_HUNT_ENEMY_LIGHTNING: HuntOption = {
    name: "Blitz-Metin",
    description: "Blitz, Dunkelheit & Feuer. Ohne Widerstand kaum zu besiegen.",
    fightAbleUnit: {
        baseHealth: 1000,
        baseDamage: 120,
        baseDefense: 60,
        armoryPieces: [],
        monsterUnit: {
            elementType: 'lightning',
            monsterType: 'metin'
        }
    }
}

export const mockHuntEnemies: HuntOption[] = [
    MOCK_HUNT_ENEMY_FIRE,
    MOCK_HUNT_ENEMY_ICE,
    MOCK_HUNT_ENEMY_LIGHTNING,
]