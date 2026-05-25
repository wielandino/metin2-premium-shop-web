import type { FightSequenceDetails } from "../../../api/types/FightSequenceDetails";
import { elementThemeUIMap } from "../../../utils/UIHelper";

export const MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_4_ROUNDS_WIN: FightSequenceDetails = {
    elementTheme: elementThemeUIMap['fire'],
    enemyName: 'Feuer-Metin',
    isInitiatorWinner: true,
    rounds: 4
}