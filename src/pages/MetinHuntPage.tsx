import { Icon } from "../components/common/Icon";
import { MainContainer } from "../components/common/MainContainer";
import { AdderBtn } from "../components/pages/MetinHuntPage/AdderBtn";
import { ArmorySlot } from "../components/pages/MetinHuntPage/CharacterArmory/ArmorySlot";
import { SwitcherBtn } from "../components/pages/MetinHuntPage/SwitcherBtn";

export const MetinHuntPage = () => {

    return (
        <>
            <MainContainer activeTabId="metin-hunt" pageHeaderName="Metin-Stein Jagd">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="bg-(--transparent-box-bg-color-primary) border border-solid border-tequila-darker">
                        <div className="p-4">
                            <p className="text-tequila uppercase font-bold text-[12px] mb-3">
                                <Icon icon="shield" /> Rüstung - Widerstands-Boni
                            </p>

                            <ArmorySlot />
                            <ArmorySlot />
                            <ArmorySlot />
                            <ArmorySlot />

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

                    <div className="">
                        <p className="text-white">Container 2</p>
                    </div>
                </div>

            </MainContainer>
        </>
    );
}