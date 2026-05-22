import type { EnemyType } from "./EnemyType";
import type { ElementType } from "../Types/ElementType";
import type { ArmoryEffect } from "../ArmoryEffect";
import type { Reward } from "../Reward";

export interface BaseEnemy {
    name: string;
    type: EnemyType;
    element: ElementType;
    health: number;
    armoryEffects?: ArmoryEffect[] | null;
    rewards?: Reward[] | null;
}