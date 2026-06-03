import { useEffect, useRef, useState } from "react";
import type { ElementTheme } from "../../../utils/UIHelper";
import { FightSequenceRound } from "./FightSequenceRound";
import { Icon } from "../Icon";
import type { FightSequenceRoundDetails } from "../../../models/FightSequence/FightSequenceDetail";

type FightSequenceContainerProps = {
    enemyName: string;
    elementTheme: ElementTheme;
    rounds: FightSequenceRoundDetails[];
    setCurrentInitiatorHealth: React.Dispatch<React.SetStateAction<number>>;
    setCurrentEnemyHealth: React.Dispatch<React.SetStateAction<number>>;
}

export const FightSequenceRoundContainer = ({ enemyName, elementTheme, rounds, setCurrentInitiatorHealth, setCurrentEnemyHealth }: FightSequenceContainerProps) => {

    const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
    const logRef = useRef<HTMLDivElement>(null);

    const ROUND_DURATION = 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentRoundIndex >= rounds.length) {
                clearInterval(interval);
                return;
            }

            setCurrentRoundIndex(prevIndex => prevIndex + 1);
        }, ROUND_DURATION);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        if (logRef.current)
            logRef.current.scrollTop = logRef.current.scrollHeight;

        if (currentRoundIndex > 0) {
            setCurrentInitiatorHealth(rounds[currentRoundIndex - 1].initiatorRemainingHealth);
            setCurrentEnemyHealth(rounds[currentRoundIndex - 1].enemyRemainingHealth);
        }

    }, [currentRoundIndex]);

    return (
        <>
            <div className="flex-1 overflow-y-auto min-h-45 max-h-70" style={{ padding: "10px 16px" }} ref={logRef}>


                {Array.from({ length: currentRoundIndex }, (_, i) => (
                    <FightSequenceRound
                        key={i + 1}
                        enemyName={enemyName}
                        round={rounds[i]}
                        elementTheme={elementTheme}
                    />
                ))}

                {currentRoundIndex < rounds.length && (
                    <div className="text-[#555] text-[11px] text-center p-2 animate-pulse">
                        <Icon icon='khanda' />
                        Kampf läuft…
                    </div>
                )}
            </div>
        </>
    );
}