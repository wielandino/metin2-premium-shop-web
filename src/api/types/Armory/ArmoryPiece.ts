import type { ArmoryType } from "../Types/ArmoryType";
import type { ArmoryEffect } from "./ArmoryEffect";

export interface ArmoryPiece {
    name: string;
    armoryBaseEffects: ArmoryEffect[];
    armoryEffects: ArmoryEffect[];
    armoryType: ArmoryType;
}