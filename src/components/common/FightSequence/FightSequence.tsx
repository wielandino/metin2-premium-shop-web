import { FightSequenceHeader } from "./FightSequenceHeader";
import { FightSequencePlayers } from "./FightSequencePlayers";
import { FightSequenceContainer } from "./FightSequenceContainer";
import type { FightSequenceResult } from "../../../models/FightSequence/FightSequenceResult";

type FightSequenceProps = {
    fightSequenceResult: FightSequenceResult;
}

export const FightSequence = ({ fightSequenceResult }: FightSequenceProps) => {

    const fightSequenceDetail = fightSequenceResult.fightSequenceDetail;
    const elementTheme = fightSequenceDetail.elementTheme;


    return (
        <>
            <div className="fixed inset-0 bg-[#000000e0] flex items-center justify-center z-50 p-4">
                <div className="bg-[#120800] border-2 border-solid max-w-125 w-full m-h-[90vh] flex flex-col"
                    style={{
                        boxShadow: `0px 0px 15px ${elementTheme.boxShadowColor}`,
                        borderColor: elementTheme.darkColor
                    }}>

                    <FightSequenceHeader elementTheme={elementTheme} enemyName={fightSequenceDetail.enemyName} />
                    <FightSequencePlayers enemyName={fightSequenceDetail.enemyName} elementTheme={elementTheme} />
                    <FightSequenceContainer enemyName={fightSequenceDetail.enemyName} elementTheme={elementTheme} maxRounds={fightSequenceDetail.rounds} />


                    {/* <div className="border-t border-solid p-4 text-center bg-[#e74c3c1f]"
                        style={{
                            borderTopColor: elementTheme.darkColor,
                            animation: '0.4s ease 0s 1 normal none running fadeSlideIn'
                        }}>

                        <div className="text-[32px] mb-1.5 text-[#e74c3c]">
                            <Icon icon="skull" />
                        </div>

                        <p className="text-[18px] text-[#e74c3c] mb-1.5">
                            Niederlage!
                        </p>

                        <p className="text-[12px] text-[#888888] mb-1.5">
                            Der Metin war zu stark. Verbessere deine Widerstände!
                        </p>

                        <button className="border border-solid border-tequila text-[#f2e69f] mt-2"
                            style={{
                                padding: '9px 28px',
                                background: 'linear-gradient(rgb(160, 112, 32), rgb(122, 85, 24))'
                            }}>
                            Schließen
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );

}