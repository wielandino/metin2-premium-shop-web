import type { FightSequenceResponse } from "../../../api/types/FightSequence/FightSequenceResponse";
import type { FightSequenceResult } from "../../../models/FightSequence/FightSequenceResult";
import { buildFightSequenceDetail } from "../../../utils/fightSequenceDetailBuilder";
import { MOCK_HUNT_ENEMY_FIRE } from "../Enemy/HuntEnemyMocking";
import { MOCK_USER_1 } from "../User/UserMocking";

export const MOCK_FIGHT_SEQUENCE_RESPONSE_1: FightSequenceResponse = { isInitiatorWinner: true }



export const MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_METIN = (): FightSequenceResult => {
    const initiator = MOCK_USER_1.character;
    const metin = MOCK_HUNT_ENEMY_FIRE;

    return {
        isInitiatorWinner: true,
        fightSequenceDetail: buildFightSequenceDetail(initiator.fightAbleUnit, metin.fightAbleUnit, true)
    }
}