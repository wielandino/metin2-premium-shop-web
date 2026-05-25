import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { FightSequenceDetails } from "../../../api/types/FightSequenceDetails";
import { Icon } from "../Icon";

type FightSequenceProps = {
    fightSequenceDetails: FightSequenceDetails;
}

export const FightSequence = ({ fightSequenceDetails }: FightSequenceProps) => {

    const elementTheme = fightSequenceDetails.elementTheme;

    return (
        <>
            <div className="fixed inset-0 bg-[#000000e0] flex items-center justify-center z-50 p-4">
                <div className="bg-[#120800] border-2 border-solid max-w-125 w-full m-h-[90vh] flex flex-col" 
                     style={{ boxShadow: `0px 0px 15px ${elementTheme.boxShadowColor}`,
                              borderColor: elementTheme.darkColor }}>

                    <div className="flex items-center gap-2.5 border-b border-b-solid"
                         style={{ background: elementTheme.backgroundColor,
                                  padding: '12px 16px',
                                  borderBottomColor: elementTheme.darkColor }}>
                        <span style={{ color: elementTheme.darkColor }}>
                            <Icon icon={elementTheme.icon as IconProp} className="text-[20px]" />
                        </span>
                        <span className="text-[#f2e69f] text-[16px] flex-1">
                            Kampf gegen {fightSequenceDetails.enemyName}
                        </span>
                    </div>

                    
                    <div className="border-b border-b-solid flex gap-4 items-center"
                         style={{ padding: '12px 16px',
                                  borderBottomColor: '#2a1500' }}>

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
                                <span className="text-[#f2e69f] text-[12px] font-bold">{fightSequenceDetails.enemyName}</span>
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

                    <div className="flex-1 overflow-y-auto min-h-45 max-h-70"
                         style={{ padding: "10px 16px" }}>

                            <div className="border-l-2 border-solid border-[#3a2010] pl-2.5 mb-2.5"
                                 style={{ animation: '0.3s ease 0s 1 normal none running fadeSlideIn' }}>
                                    <div className="text-tequila text-[11px] font-bold mb-1 uppercase letter-spacing-1">
                                        Runde 1
                                    </div>

                                    <div className="text-[#e74c3c] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon={elementTheme.icon as IconProp} /> 
                                        {fightSequenceDetails.enemyName}: <i>Frostschlag!</i>
                                        <span className="ml-1.5 text-[#ff9999]">-206 HP</span> 
                                    </div>

                                    <div className="text-[#2ecc71] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon="khanda"/> 
                                        Du: <i>Hieb!</i>
                                        <span className="ml-1.5 text-[#88ff99]">-150 HP</span>
                                    </div>
                            </div>

                            <div className="border-l-2 border-solid border-[#3a2010] pl-2.5 mb-2.5"
                                 style={{ animation: '0.3s ease 0s 1 normal none running fadeSlideIn' }}>
                                    <div className="text-tequila text-[11px] font-bold mb-1 uppercase letter-spacing-1">
                                        Runde 1
                                    </div>

                                    <div className="text-[#e74c3c] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon={elementTheme.icon as IconProp} /> 
                                        {fightSequenceDetails.enemyName}: <i>Frostschlag!</i>
                                        <span className="ml-1.5 text-[#ff9999]">-206 HP</span> 
                                    </div>

                                    <div className="text-[#2ecc71] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon="khanda"/> 
                                        Du: <i>Hieb!</i>
                                        <span className="ml-1.5 text-[#88ff99]">-150 HP</span>
                                    </div>
                            </div>

                            <div className="border-l-2 border-solid border-[#3a2010] pl-2.5 mb-2.5"
                                 style={{ animation: '0.3s ease 0s 1 normal none running fadeSlideIn' }}>
                                    <div className="text-tequila text-[11px] font-bold mb-1 uppercase letter-spacing-1">
                                        Runde 1
                                    </div>

                                    <div className="text-[#e74c3c] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon={elementTheme.icon as IconProp} /> 
                                        {fightSequenceDetails.enemyName}: <i>Frostschlag!</i>
                                        <span className="ml-1.5 text-[#ff9999]">-206 HP</span> 
                                    </div>

                                    <div className="text-[#2ecc71] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon="khanda"/> 
                                        Du: <i>Hieb!</i>
                                        <span className="ml-1.5 text-[#88ff99]">-150 HP</span>
                                    </div>
                            </div>

                            <div className="border-l-2 border-solid border-[#3a2010] pl-2.5 mb-2.5"
                                 style={{ animation: '0.3s ease 0s 1 normal none running fadeSlideIn' }}>
                                    <div className="text-tequila text-[11px] font-bold mb-1 uppercase letter-spacing-1">
                                        Runde 1
                                    </div>

                                    <div className="text-[#e74c3c] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon={elementTheme.icon as IconProp} /> 
                                        {fightSequenceDetails.enemyName}: <i>Frostschlag!</i>
                                        <span className="ml-1.5 text-[#ff9999]">-206 HP</span> 
                                    </div>

                                    <div className="text-[#2ecc71] text-[12px] mb-1.5 flex items-center gap-1.5">
                                        <Icon icon="khanda"/> 
                                        Du: <i>Hieb!</i>
                                        <span className="ml-1.5 text-[#88ff99]">-150 HP</span>
                                    </div>
                            </div>

                            
                    </div>

                    <div className="border-t border-solid p-4 text-center bg-[#e74c3c1f]"
                         style={{ borderTopColor: elementTheme.darkColor,
                                  animation: '0.4s ease 0s 1 normal none running fadeSlideIn'}}>

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
                                style={{ padding: '9px 28px', 
                                         background: 'linear-gradient(rgb(160, 112, 32), rgb(122, 85, 24))' }}>
                            Schließen
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}