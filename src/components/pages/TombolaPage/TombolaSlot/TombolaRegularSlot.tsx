import type { RegularTombolaItem } from "../../../../api/types/Tombola/TombolaItem"
import { useLocalizedItem } from "../../../../utils/useLocalizedItemHook"
import { SlotShell } from "./SlotShell"

interface TombolaRegularSlotProps {
    tombolaItem: RegularTombolaItem
    isSlotActive: boolean
}

export const TombolaRegularSlot = ({ tombolaItem, isSlotActive }: TombolaRegularSlotProps) => {
    const localizedItem = useLocalizedItem(tombolaItem.item)

    return (
        <SlotShell
            isSlotActive={isSlotActive}
            slotVariant="tombola-item-slot-active border-[#662d12]"
            rollChance={tombolaItem.rollChance}
            icon={
                <img
                    src={"/images/items/" + tombolaItem.item.imageName + ".png"}
                    className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
            }
            name={localizedItem.name} />
    )
}
