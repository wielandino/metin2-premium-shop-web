import type { FightSequenceResult } from "../../../models/FightSequence/FightSequenceResult";
import { elementThemeUIMap } from "../../../utils/UIHelper";

export const MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_4_ROUNDS_WIN: FightSequenceResult = {
    isInitiatorWinner: true,

    fightSequenceDetail: {
        elementTheme: elementThemeUIMap['fire'],
        enemyName: 'Feuer-Metin',
        rounds: 4
    }
}