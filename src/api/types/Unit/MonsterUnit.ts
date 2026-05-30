import type { MonsterType } from "../Enemy/MonsterType";
import type { ElementType } from "../Types/ElementType";

export interface MonsterUnit {
    elementType: ElementType;
    monsterType: MonsterType;
}