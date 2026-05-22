import type { HuntOption } from "../../../api/types/Hunt/HuntOption";

export const MOCK_HUNT_ENEMY_FIRE: HuntOption = {
    name: "Feuer-Metin",
    description: "Feuer & Gift. Herausfordernd, aber ohne Rüstung möglich.",
    element: "fire",
    type: "metin",
    health: 1000,
}

export const MOCK_HUNT_ENEMY_ICE: HuntOption = {
    name: "Eis-Metin",
    description: "Eis & Dunkelheit. Fordert passende Widerstände.",
    element: "ice",
    type: "metin",
    health: 1000,
}

export const MOCK_HUNT_ENEMY_LIGHTNING: HuntOption = {
    name: "Blitz-Metin",
    description: "Blitz, Dunkelheit & Feuer. Ohne Widerstand kaum zu besiegen.",
    element: "lightning",
    type: "metin",
    health: 1000,
}

export const mockHuntEnemies: HuntOption[] = [
    MOCK_HUNT_ENEMY_FIRE,
    MOCK_HUNT_ENEMY_ICE,
    MOCK_HUNT_ENEMY_LIGHTNING,
]