import { useContext, useState } from "react";
import type { ArmoryType } from "../../../api/types/Types/ArmoryType";
import { Icon } from "../Icon";
import { UserContext } from "../../../context/UserContext";
import { ArmoryEffectSlot } from "./ArmoryEffectSlot";
import { AdderBtn } from "../../pages/MetinHuntPage/AdderBtn";
import { SwitcherBtn } from "../../pages/MetinHuntPage/SwitcherBtn";
import { ArmorySlotButton } from "./ArmorySlotButton";
import { armoryThemes } from "../../../utils/UIHelper";

export const CharacterArmory = () => {

    const user = useContext(UserContext);
    const [armorySelectionType, setArmorySelectionType] = useState<ArmoryType>("chest");
    const characterArmoryPieces = user?.character.fightAbleUnit.armoryPieces;

    const handleArmoryTypeSelection = (type: ArmoryType) => {
        setArmorySelectionType(type);
    };


    return (
        <div className="bg-(--transparent-box-bg-color-primary) border border-solid border-tequila-darker">
            <div className="p-4">
                <p className="text-tequila uppercase font-bold text-[12px] mb-3">
                    <Icon icon="shield" /> Rüstung - Stärke- & Widerstandsboni
                </p>

                <div className="flex items-center gap-2 mb-3">

                    {Object.keys(armoryThemes).map((type) => (
                        <ArmorySlotButton key={type} armoryType={type as ArmoryType} isActive={armorySelectionType === type} onArmoryTypeSelection={handleArmoryTypeSelection} />
                    ))}

                </div>

                {characterArmoryPieces?.filter((piece) => piece.armoryType === armorySelectionType)
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