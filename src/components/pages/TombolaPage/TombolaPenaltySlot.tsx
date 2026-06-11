import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons/faSkullCrossbones"
import type { TombolaItem } from "../../../api/types/TombolaItem"
import { Icon } from "../../common/Icon"
import { SlotShell } from "./SlotShell"

interface TombolaPenaltySlotProps {
    tombolaItem: TombolaItem
    isSlotActive: boolean
}

export const TombolaPenaltySlot = ({ tombolaItem, isSlotActive }: TombolaPenaltySlotProps) => (
    <SlotShell
        isSlotActive={isSlotActive}
        slotVariant="tombola-item-slot-active-penalty bg-(--tombola-bg-penalty-color) border-[#8b0000]"
        rollChance={tombolaItem.rollChance}
        icon={
            <Icon
                icon={faSkullCrossbones}
                className="text-[#dc143c] text-[2.5rem] filter-(--tombola-item-icon-filter)" />
        }
        name="Penalty" />
)
