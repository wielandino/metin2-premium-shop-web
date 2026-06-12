import type { RegularTombolaItem } from "../../../../api/types/Tombola/TombolaItem"
import { useLocalizedItem } from "../../../../customHooks/useLocalizeHook"

export const TombolaRegularRewardContent = ({ tombolaItem }: { tombolaItem: RegularTombolaItem }) => {
    const localizedItem = useLocalizedItem(tombolaItem.item)

    return (
        <>
            <div className="h-25">
                <img
                    src={"/images/items/" + tombolaItem.item.imageName + ".png"}
                    className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
            </div>

            <div className="text-[1.25rem] font-bold text-tequila mb-1 mt-5">
                {localizedItem.name}
            </div>
        </>
    )
}