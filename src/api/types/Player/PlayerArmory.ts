import type { ArmoryEffect } from "../Armory/ArmoryEffect";

export interface PlayerArmory {
    name: string;
    armoryEffect: (ArmoryEffect | null)[]
}