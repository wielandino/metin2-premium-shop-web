import type { PlayerArmory } from "./PlayerArmory";

export interface Player {
    armory: PlayerArmory[] | null;
    activeArmory: PlayerArmory | null;
}