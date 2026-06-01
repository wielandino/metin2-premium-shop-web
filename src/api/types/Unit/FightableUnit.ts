import type { ArmoryPiece } from "../Armory/ArmoryPiece";
import type { MonsterUnit } from "./MonsterUnit";

export interface FightableUnit {
    baseHealth: number;
    baseDefence: number;
    baseDamage: number;
    armoryPieces: ArmoryPiece[];

    monsterUnit: MonsterUnit | null;
}