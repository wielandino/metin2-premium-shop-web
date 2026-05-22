import { useContext } from "react";
import { Icon } from "../components/common/Icon";
import { MainContainer } from "../components/common/MainContainer";
import { AdderBtn } from "../components/pages/MetinHuntPage/AdderBtn";
import { ArmoryEffectSlot } from "../components/pages/MetinHuntPage/CharacterArmory/ArmoryEffectSlot";
import { SwitcherBtn } from "../components/pages/MetinHuntPage/SwitcherBtn";
import { UserContext } from "../context/UserContext";
import { HuntOptionSlot } from "../components/pages/MetinHuntPage/HuntOption/HuntOptionSlot";
import { mockHuntEnemies } from "../testing/mock/Enemy/HuntEnemyMocking";

export const MetinHuntPage = () => {

    const user = useContext(UserContext);

    const huntOptionMocks = mockHuntEnemies;

    return (
        <>
            <MainContainer activeTabId="metin-hunt" pageHeaderName="Metin-Stein Jagd">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-(--transparent-box-bg-color-primary) border border-solid border-tequila-darker">
                        <div className="p-4">
                            <p className="text-tequila uppercase font-bold text-[12px] mb-3">
                                <Icon icon="shield" /> Rüstung - Stärke- & Widerstandsboni
                            </p>

                            {user?.activeArmory?.armoryEffect.map((armoryEffect, index) => (
                                <ArmoryEffectSlot key={index} slotNumber={index + 1} armoryEffect={armoryEffect} />
                            ))}

                            <div className="divider"></div>
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <AdderBtn />
                                </div>

                                <div className="flex-1">
                                    <SwitcherBtn />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        {huntOptionMocks.map((huntOption, index) => (
                            <HuntOptionSlot key={index} huntOptionDetails={huntOption} />
                        ))}
                    </div>
                </div>

            </MainContainer>
        </>
    );
}