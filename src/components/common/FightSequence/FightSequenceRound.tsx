import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ElementThemeUIMap } from "../../../utils/UIHelper";
import { Icon } from "../Icon";
import type { FightSequenceRoundDetails } from "../../../models/FightSequence/FightSequenceDetail";

type FightSequenceRoundProps = {
    enemyName: string;
    round: FightSequenceRoundDetails;
    elementTheme: ElementThemeUIMap[string];
}

export const FightSequenceRound = ({ enemyName, round, elementTheme}: FightSequenceRoundProps) => {
    return (
        <>
            <div className="border-l-2 border-solid border-[#3a2010] pl-2.5 mb-2.5"
                style={{ animation: '0.3s ease 0s 1 normal none running fadeSlideIn' }}>
                <div className="text-tequila text-[11px] font-bold mb-1 uppercase letter-spacing-1">
                    Runde {round.round}
                </div>

                <div className="text-[#e74c3c] text-[12px] mb-1.5 flex items-center gap-1.5">
                    <Icon icon={elementTheme.icon as IconProp} />
                    {enemyName}: <i>Frostschlag!</i>
                    <span className="ml-1.5 text-[#ff9999]">-{round.enemyDamage}</span>
                </div>

                <div className="text-[#2ecc71] text-[12px] mb-1.5 flex items-center gap-1.5">
                    <Icon icon="khanda" />
                    Du: <i>Hieb!</i>
                    <span className="ml-1.5 text-[#88ff99]">-{round.initiatorDamage}</span>
                </div>

                <style>
                    {`
                        @keyframes fadeSlideIn {
                            from { opacity: 0; transform: translateY(-6px); }
                            to   { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes pulse {
                            0%, 100% { opacity: 0.4; }
                            50%       { opacity: 1; }
                        }
                    `}
                </style>
            </div>
        </>
    );
}