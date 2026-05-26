import type { ElementType } from "../../api/types/Types/ElementType";
import type { ElementThemeUIMap } from "../../utils/UIHelper";

export interface FightSequenceDetail {
    rounds: number;
    elementTheme: ElementThemeUIMap[ElementType];
    enemyName: string;
}