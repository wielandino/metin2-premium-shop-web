import clsx from "clsx";
import { getCorrectElementTypeColor, getCorrectEnemyTypeColor } from "../../../../utils/armoryEffectSlotHelper";
import { Button } from "../../../common/Button/Button"
import { useState } from "react";
import { InfoPopup } from "../../../common/InfoPopup";
import type { ArmoryEffect } from "../../../../api/types/Armory/ArmoryEffect";

export type ArmoryEffectSlotProps = {
    slotNumber: number;
    armoryEffect: ArmoryEffect | null;
};

export const ArmoryEffectSlot = ({ slotNumber, armoryEffect }: ArmoryEffectSlotProps) => {

    let slotTextColor = "#555555";
    const isSlotActive = armoryEffect != null;

    if (isSlotActive) {
        if (armoryEffect.type === 'damage_resistence_effect')
            slotTextColor = getCorrectEnemyTypeColor(armoryEffect.enemyType);
        else if (armoryEffect.type === 'element_damage')
            slotTextColor = getCorrectElementTypeColor(armoryEffect.elementType);
        else if (armoryEffect.type === 'damage')
            slotTextColor = "#E74C3C";
    }

    const slotTextVariant = isSlotActive
        ? "text-[12px] font-bold"
        : "text-[11px]";


    const [toast, setToast] = useState<string | null>(null);

    function onSwitchClick(msg: string) {
        setToast(msg)
        setTimeout(() => setToast(null), 3000);
    }

    return (
        <>
            {toast && (
                <InfoPopup description={toast} />
            )}

            <div className="flex items-center bg-(--transparent-box-bg-color-secondary) border border-solid border-[#3A2010] pt-2.5 pb-2.5 pl-3 pr-3 gap-2.5 mb-1.5">
                <span className="text-[#555555] text-[11px] min-w-4">{slotNumber}.</span>
                <span className={clsx(
                    "flex-1",
                    {
                        [slotTextVariant]: isSlotActive
                    })}
                    style={{ color: slotTextColor }}>

                    {armoryEffect ? armoryEffect.name + " " + armoryEffect.bonus + "%" : "- Leerer Slot -"}
                </span>

                {(armoryEffect == null) && (
                    <span style={{background: "rgba(0, 0, 0, 0.2)"}}>
                        <Button title="Adder"
                                iconId="plus"
                                className="pt-1 pb-1 pl-2 pr-2 border border-solid border-[#27AE60] text-[#555555] text-[11px] items-center gap-1" />
                    </span>
                )}

                {(armoryEffect != null) && (
                    <span style={{ background: "rgba(139, 94, 60, 0.3)" }}>
                        <Button title="Switch"
                                iconId="shuffle" 
                                className="pt-1 pb-1 pl-2 pr-2 border border-solid border-[#8b5e3c] text-[#f2e69f] text-[11px] items-center gap-1"
                                onClick={() => onSwitchClick("Effekt erfolgreich hinzugefügt!")} />
                    </span>
                )}
            </div>
        </>
    )
}