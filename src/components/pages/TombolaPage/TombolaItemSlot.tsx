import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons/faSkullCrossbones"
import type { TombolaItem } from "../../../api/types/TombolaItem"
import { Icon } from "../../common/Icon"
import clsx from "clsx"

interface TombolaItemSlotProps {
    tombolaItem: TombolaItem,
    isSlotActive: boolean
}

export const TombolaItemSlot = ({ tombolaItem, isSlotActive }: TombolaItemSlotProps) => {

    const isBlank = !tombolaItem.item
    const slotName = tombolaItem.item?.name ?? tombolaItem.name ?? "Empty"

    const slotVariant = !isBlank
        ? "tombola-item-slot-active border-[#662d12] "
        : "tombola-item-slot-active-penalty bg-(--tombola-bg-penalty-color) border-[#8b0000]";

    const slotTextCssClass = isSlotActive
        ? "text-[#3c1e16] text-shadow-(--tombola-slot-active-text-shadow)"
        : "text-(--golden-fleece) text-shadow-(--custom-text-shadow)"



    return (
        <div className={clsx(
            "tombola-item-slot p-4",
            "border-2 border-solid",
            "shadow-[0_1px_2px_#0000004d] bg-black/25",
            {
                [slotVariant]: isSlotActive
            }
        )}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 text-center">
                    {isBlank ? (
                        <Icon
                            icon={faSkullCrossbones}
                            className="text-[#dc143c] text-[2.5rem] filter-(--tombola-item-icon-filter)" />
                    ) : (
                        <img
                            src={"/images/items/" + tombolaItem.item!.imageName + ".png"}
                            className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
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