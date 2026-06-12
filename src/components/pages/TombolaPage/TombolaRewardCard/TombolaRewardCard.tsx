import type { TombolaItem } from "../../../../api/types/Tombola/TombolaItem"
import { TombolaPenaltyRewardContent } from "./TombolaPenaltyRewardContent"
import { TombolaRegularRewardContent } from "./TombolaRegularRewardContext"

interface TombolaRewardCardProps {
    tombolaItem: TombolaItem
}

export const TombolaRewardCard = ({ tombolaItem }: TombolaRewardCardProps) => {
    return (
        <div className="m-auto">
            {tombolaItem.itemType === "regular"
                ? <TombolaRegularRewardContent tombolaItem={tombolaItem} />
                : <TombolaPenaltyRewardContent tombolaItem={tombolaItem} />}
        </div>
    )
}
