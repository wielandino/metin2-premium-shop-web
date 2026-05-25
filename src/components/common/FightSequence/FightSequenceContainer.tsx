import { useEffect, useRef, useState } from "react";
import type { ElementThemeUIMap } from "../../../utils/UIHelper";
import { FightSequenceRound } from "./FightSequenceRound";
import { Icon } from "../Icon";

type FightSequenceContainerProps = {
    enemyName: string;
    elementTheme: ElementThemeUIMap[string];
    maxRounds: number;
}

export const FightSequenceContainer = ({ enemyName, elementTheme, maxRounds }: FightSequenceContainerProps) => {

    const [currentRound, setCurrentRound] = useState([0]);
    const logRef = useRef<HTMLDivElement>(null);

    const ROUND_DURATION = 1000;

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentRound.length >= maxRounds) {
                clearInterval(interval);
                return;
            }

            setCurrentRound(prev => [...prev, prev.length + 1]);
        }, ROUND_DURATION);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [currentRound]);

    return (
        <>
            <div className="flex-1 overflow-y-auto min-h-45 max-h-70" style={{ padding: "10px 16px" }} ref={logRef}>


                {Array.from({ length: currentRound.length }, (_, i) => (
                    <FightSequenceRound
                        key={i + 1}
                        enemyName={enemyName}
                        round={i + 1}
                        elementTheme={elementTheme}
                    />
                ))}

                {currentRound.length < maxRounds && (
                    <div className="text-[#555] text-[11px] text-center p-2 animate-pulse">
                        <Icon icon='khanda' />
                        Kampf läuft…
                    </div>
                )}
            </div>
        </>
    );
}