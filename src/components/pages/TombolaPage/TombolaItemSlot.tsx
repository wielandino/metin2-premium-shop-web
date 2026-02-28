import type { TombolaItem } from "../../../models/TombolaItem"

interface TombolaItemSlotProps {
    item: TombolaItem | undefined
}

export const TombolaItemSlot = ({item}: TombolaItemSlotProps) => {
    return (
        <>
            <div className="h-[140px] tombola-item-slot shadow-[0_1px_2px_#0000004d] border-2 border-solid border-[#662d12] bg-black/25">
                <div className="flex flex-col items-center gap-2 p-3">
                    <div className="w-16 h-16">
                        <img src={"/images/items/" + item!.item!.imageName + ".png"} className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
                    </div>
                    <div className="color-(--golden-fleece)"></div>
                    <div className="tombola-item-slot-weight"></div>
                </div>
            </div>
        </>
    )
}