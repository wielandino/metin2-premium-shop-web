import type { Reward } from "../Reward";
import type { Unit } from "../Unit/Unit";

export interface BaseEnemy extends Unit {
    name: string;
    rewards?: Reward[] | null;
    
}