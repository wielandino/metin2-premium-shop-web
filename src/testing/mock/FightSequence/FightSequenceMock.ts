import type { FightSequenceDetails } from "../../../api/types/FightSequenceDetails";
import { elementUIMap } from "../../../utils/enemyAndElementUIHelper";

export const MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_4_ROUNDS_WIN: FightSequenceDetails = {
    elementTheme: elementUIMap['fire'],
    enemyName: 'Feuer-Metin',
    isInitiatorWinner: true,
    rounds: 4
}