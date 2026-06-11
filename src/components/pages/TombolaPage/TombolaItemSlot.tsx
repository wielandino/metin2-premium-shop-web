import type { TombolaItem } from "../../../api/types/TombolaItem"
import type { Item } from "../../../api/types/Item"
import { TombolaRegularSlot } from "./TombolaRegularSlot"
import { TombolaPenaltySlot } from "./TombolaPenaltySlot"

interface TombolaItemSlotProps {
    tombolaItem: TombolaItem,
    isSlotActive: boolean
}

export const TombolaItemSlot = ({ tombolaItem, isSlotActive }: TombolaItemSlotProps) => {
    return tombolaItem.item
        ? <TombolaRegularSlot tombolaItem={tombolaItem as TombolaItem & { item: Item }} isSlotActive={isSlotActive} />
        : <TombolaPenaltySlot tombolaItem={tombolaItem} isSlotActive={isSlotActive} />
}
