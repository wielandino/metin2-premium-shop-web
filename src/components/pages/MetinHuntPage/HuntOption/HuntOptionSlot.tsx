import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import type { HuntOption } from "../../../../api/types/Hunt/HuntOption"
import { elementThemeUIMap } from "../../../../utils/UIHelper"
import { Button } from "../../../common/Button/Button"
import { Icon } from "../../../common/Icon"
import { HuntOptionSlotDescription } from "./HuntOptionSlotDescription"
import { useState } from "react"
import { FightSequence } from "../../../common/FightSequence/FightSequence"
import { MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_4_ROUNDS_WIN } from "../../../../testing/mock/FightSequence/FightSequenceMock"

type HuntOptionSlotProps = {
    huntOptionDetails: HuntOption
}

export const HuntOptionSlot = ({ huntOptionDetails }: HuntOptionSlotProps) => {

    const uiTheme = elementThemeUIMap[huntOptionDetails.elementType];


    const [fightSequenceState, setFightSequenceState] = useState<boolean>();
    const attackStone = () => {
        setFightSequenceState(true);
    }

    return (
        <>
            {fightSequenceState ? (
                <FightSequence fightSequenceResult={MOCK_FIGHT_SEQUENCE_AGAINST_FIRE_4_ROUNDS_WIN} />
            ) : null}

            <div className={`border border-solid p-3.5`} style={{ borderColor: uiTheme.darkColor, background: uiTheme.backgroundColor }}>
                <div className="flex items-start gap-3">
                    <div className="flex flex-col items-center min-w-12">
                        <span style={{ color: uiTheme.darkColor }}>
                            <Icon icon={uiTheme.icon as IconProp} className="text-[26px]" />
                        </span>
                        <span className="mt-1 text-[11px] font-bold bg-[#e74c3c4d] border border-solid border-[#e74c3c] text-[#f2e69f]" style={{ padding: '2px 7px' }}>
                            25%
                        </span>
                    </div>

                    <HuntOptionSlotDescription title={huntOptionDetails.name} description={huntOptionDetails.description} />

                    <Button className="pt-2 pb-2 pl-3.5 pr-3.5 text-[12px] border border-solid text-[#f2e69f] self-center hidden sm:flex"
                        title="Jagen"
                        iconId="khanda"
                        style={{
                            background: `linear-gradient(${uiTheme.gradiantColor})`,
                            boxShadow: `0px 0px 8px ${uiTheme.boxShadowColor}`,
                            borderColor: uiTheme.darkColor
                        }}
                        onClick={() => attackStone()} />
                </div>

                <Button className="pt-2 pb-2 pl-3.5 pr-3.5 text-[12px] border border-solid text-[#f2e69f] self-center md:hidden w-full mt-3"
                    title="Jagen"
                    iconId="khanda"
                    style={{
                        background: `linear-gradient(${uiTheme.gradiantColor})`,
                        boxShadow: `0px 0px 8px ${uiTheme.boxShadowColor}`,
                        borderColor: uiTheme.darkColor
                    }} />
            </div>
        </>
    )
}