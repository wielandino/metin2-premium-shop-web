import { useContext, useRef, useState } from "react";
import type { ArmoryType } from "../../../api/types/Types/ArmoryType";
import { Icon } from "../Icon";
import { UserContext } from "../../../context/UserContext";
import { Button } from "../Button/Button";
import { ArmoryEffectSlot } from "./ArmoryEffectSlot";
import { AdderBtn } from "../../pages/MetinHuntPage/AdderBtn";
import { SwitcherBtn } from "../../pages/MetinHuntPage/SwitcherBtn";

export const CharacterArmory = () => {

    const user = useContext(UserContext);
    const [armorySelectionType, setArmorySelectionType] = useState<ArmoryType>("chest");
    const playerActiveArmory = user?.player.activeArmory;

    const ref = useRef<HTMLDivElement>(null);

    const handleArmoryTypeSelection = (type: ArmoryType) => {
        console.log(ref.current);
        setArmorySelectionType(type);
    };


    return (
        <div className="bg-(--transparent-box-bg-color-primary) border border-solid border-tequila-darker">
            <div className="p-4">
                <p className="text-tequila uppercase font-bold text-[12px] mb-3">
                    <Icon icon="shield" /> Rüstung - Stärke- & Widerstandsboni
                </p>

                <div className="flex items-center gap-2 mb-3">

                    <div className="w-10 h-10flex items-center justify-center text-tequila" ref={ref}>
                        <Button iconId="shield" className="text-[26px] " onClick={() => handleArmoryTypeSelection("chest")} />
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center" ref={ref}>
                        <Button iconId="hand-fist" className="text-[26px]" onClick={() => handleArmoryTypeSelection("weapon")} />
                    </div>
                </div>

                {playerActiveArmory?.armoryPieces.filter((piece) => piece.armoryType === armorySelectionType)
                    .map((piece) => piece.armoryEffects)
                    .flat()
                    .map((armoryEffect, index) => (
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
    );
}