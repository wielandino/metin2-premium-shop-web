import type { ElementThemeUIMap } from "../../utils/UIHelper";
import type { ElementType } from "./Types/ElementType";

export interface FightSequenceDetails {
    isInitiatorWinner: boolean;
    rounds: number;
    enemyName: string;
    elementTheme: ElementThemeUIMap[ElementType];
}