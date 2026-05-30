import type { ArmoryPiece } from "../Armory/ArmoryPiece";
import type { MonsterUnit } from "./MonsterUnit";

export interface FightableUnit {
    baseHealth: number;
    baseDefense: number;
    baseDamage: number;
    armoryPieces: ArmoryPiece[];

    monsterUnit: MonsterUnit | null;
}