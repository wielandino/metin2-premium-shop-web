import type { Reward } from "../Reward";
import type { ElementType } from "../Types/ElementType";
import type { Unit } from "../Unit/Unit";
import type { EnemyType } from "./EnemyType";

export interface BaseEnemy extends Unit {
    name: string;
    type: EnemyType;
    elementType: ElementType;
    rewards?: Reward[] | null;
    
}