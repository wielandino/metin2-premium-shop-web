import type { TombolaItem } from "../../../../api/types/Tombola/TombolaItem"
import { TombolaRegularSlot } from "./TombolaRegularSlot"
import { TombolaPenaltySlot } from "./TombolaPenaltySlot"

interface TombolaItemSlotProps {
    tombolaItem: TombolaItem,
    isSlotActive: boolean
}

export const TombolaItemSlot = ({ tombolaItem, isSlotActive }: TombolaItemSlotProps) => {
    if (tombolaItem.itemType === "regular")
        return <TombolaRegularSlot tombolaItem={tombolaItem} isSlotActive={isSlotActive} />

    return <TombolaPenaltySlot tombolaItem={tombolaItem} isSlotActive={isSlotActive} />
}
