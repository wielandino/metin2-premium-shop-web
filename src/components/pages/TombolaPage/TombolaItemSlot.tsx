import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons/faSkullCrossbones"
import type { TombolaItem } from "../../../models/TombolaItem"
import { Icon } from "../../common/Icon"

interface TombolaItemSlotProps {
    tombolaItem: TombolaItem,
    isSlotActive: boolean
}

export const TombolaItemSlot = ({ tombolaItem, isSlotActive }: TombolaItemSlotProps) => {

    const isBlank = !tombolaItem.item
    const slotName = tombolaItem.item?.name ?? tombolaItem.name ?? "Empty"

    const slotActiveCssClass = !isBlank
        ? "tombola-item-slot-active"
        : "tombola-item-slot-active-penalty";

    const slotTextCssClass = isSlotActive
        ? "text-[#3c1e16] text-shadow-(--tombola-slot-active-text-shadow)"
        : "text-(--golden-fleece) text-shadow-(--custom-text-shadow)"

    return (
        <div className={`tombola-item-slot ${isSlotActive ? slotActiveCssClass : ``} shadow-[0_1px_2px_#0000004d] border-2 border-solid ${!isBlank ? `border-[#662d12] bg-black/25` : `bg-(--tombola-bg-penalty-color) border-[#8b0000]`} p-4`}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 text-center">
                    {isBlank ? (
                        <Icon icon={faSkullCrossbones} className="text-[#dc143c] text-[2.5rem] filter-(--tombola-item-icon-filter)" />
                    ) : (
                        <img src={"/images/items/" + tombolaItem.item!.imageName + ".png"} className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
                    )}

                </div>
                <div className={`${slotTextCssClass} text-[.75rem] text-center font-bold min-h-10 leading-5`}>
                    {slotName}
                </div>

                <div className={`${slotTextCssClass} text-[.7rem]`}>{tombolaItem.rollChance.toString()}%</div>
            </div>
        </div>
    )
}