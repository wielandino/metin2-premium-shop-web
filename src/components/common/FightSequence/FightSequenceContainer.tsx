import type { ElementUIMap } from "../../../utils/enemyAndElementUIHelper";
import { FightSequenceRound } from "./FightSequenceRound";

type FightSequenceContainerProps = {
    enemyName: string;
    elementTheme: ElementUIMap[string];
}

export const FightSequenceContainer = ({ enemyName, elementTheme }: FightSequenceContainerProps) => {
    return (
        <>
            <div className="flex-1 overflow-y-auto min-h-45 max-h-70"
                style={{ padding: "10px 16px" }}>

                <FightSequenceRound enemyName={enemyName} round="1" elementTheme={elementTheme} />
                <FightSequenceRound enemyName={enemyName} round="2" elementTheme={elementTheme} />
                <FightSequenceRound enemyName={enemyName} round="3" elementTheme={elementTheme} />
                <FightSequenceRound enemyName={enemyName} round="4" elementTheme={elementTheme} />

            </div>
        </>
    );
}