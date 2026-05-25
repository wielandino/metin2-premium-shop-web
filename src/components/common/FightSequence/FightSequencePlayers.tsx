import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon";
import type { ElementThemeUIMap } from "../../../utils/UIHelper";

type FightSequencePlayersProps = {
    enemyName: string;
    elementTheme: ElementThemeUIMap[string];
}

export const FightSequencePlayers = ({ enemyName, elementTheme }: FightSequencePlayersProps) => {
    return (
        <>
            <div className="border-b border-b-solid flex gap-4 items-center"
                style={{
                    padding: '12px 16px',
                    borderBottomColor: '#2a1500'
                }}>

                {/* Left Side Player */}
                <div className="flex-1 text-left">
                    <div className="flex items-center gap-1.5 flex-row mb-1">
                        <Icon icon="khanda" className="text-[16px] text-tequila" />
                        <span className="text-[#f2e69f] text-[12px] font-bold">Du</span>
                    </div>

                    <div className="h-2.5 bg-[#00000066] border border-solid border-tequila"></div>

                    <div className="text-[#aaaaaa] text-[11px] mt-1 text-left">
                        0 / 1000 HP
                    </div>
                </div>

                <span className="text-tequila text-[16px] font-bold">VS</span>

                {/* Right Side Enemy */}
                <div className="flex-1 text-right">
                    <div className="flex items-center gap-1.5 flex-row mb-1 justify-end">
                        <span className="text-[#f2e69f] text-[12px] font-bold">{enemyName}</span>
                        <span style={{ color: elementTheme.darkColor }}>
                            <Icon icon={elementTheme.icon as IconProp} className="text-[16px]" />
                        </span>
                    </div>

                    <div className="h-2.5 bg-[#00000066] border border-solid border-tequila"></div>

                    <div className="text-[#aaaaaa] text-[11px] mt-1 text-right">
                        0 / 1000 HP
                    </div>
                </div>
            </div>
        </>
    )
}
