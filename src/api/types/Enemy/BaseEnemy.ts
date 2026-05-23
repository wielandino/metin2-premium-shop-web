import type { EnemyType } from "./EnemyType";
import type { ElementType } from "../Types/ElementType";
import type { Reward } from "../Reward";
import type { ArmoryEffect } from "../Armory/ArmoryEffect";

export interface BaseEnemy {
    name: string;
    type: EnemyType;
    element: ElementType;
    health: number;
    baseDefense: number;
    baseDamage: number;
    armoryEffects?: ArmoryEffect[] | null;
    rewards?: Reward[] | null;
}