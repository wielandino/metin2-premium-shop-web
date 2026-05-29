import type { ArmoryPiece } from "../Armory/ArmoryPiece";

export interface FightableUnit {
    baseHealth: number;
    baseDefense: number;
    baseDamage: number;

    armoryPieces: ArmoryPiece[];
}