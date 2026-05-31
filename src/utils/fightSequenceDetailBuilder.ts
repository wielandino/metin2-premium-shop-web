import type { FightableUnit } from "../api/types/Unit/FightableUnit";
import { buildCombatStats } from "./combatStatsBuilder";

export const buildFightSequenceDetail = (initiator: FightableUnit, enemy: FightableUnit, isInitiatorWinner: boolean) => {
    // Every fighting sequence is already decided by the server by calculating the chance of winning or losing a fight
    // We need to implement a fake fight sequence for the frontend to something to show

    // Every Fight Sequence does have a n amount of rounds where damage is given and taken
    // Our function need to decide how many rounds should be build with what damage
    // The outcome always must favor the winner of this fight

    // For the start there should be 3 types of round lengths:
    // 1. Short Rounds (1-3): If the initiator or the enemy is way stronger than his opponent
    // 2. Medium Rounds (4-8): If the initiator or the enemy are slighty stronger than his opponent
    // 3. Long Rounds (9-12): If the initiator or the enemy is even or slightly weaker than his opponent

    const [winner, loser] = isInitiatorWinner
        ? [buildCombatStats(initiator), buildCombatStats(enemy)]
        : [buildCombatStats(enemy), buildCombatStats(initiator)];

    // First check if the loser does have any elemental resistence
    const loserElementResistence: number = [...winner.bonusCombatStats.elements]
        .filter(e => e[1].damage > 0)
        .reduce((acc, current) => {

            const element = current[0];
            let loserElementResistence = 0;

            if (loser.bonusCombatStats.elements.has(element)) {
                loserElementResistence =
                    loser.bonusCombatStats.elements.get(element)!.resistance;
            }

            return acc = loserElementResistence;
        }, 0)


    
        console.log(loserElementResistence);
}
