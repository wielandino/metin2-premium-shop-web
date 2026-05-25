import type { ElementUIMap } from "../../utils/enemyAndElementUIHelper";
import type { ElementType } from "./Types/ElementType";

export interface FightSequenceDetails {
    isInitiatorWinner: boolean;
    rounds: number;
    enemyName: string;
    elementTheme: ElementUIMap[ElementType];
}