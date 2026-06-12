import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import type { PenaltyTombolaItem } from "../../../../api/types/Tombola/TombolaItem";
import { Icon } from "../../../common/Icon";

export const TombolaPenaltyRewardContent = ({ tombolaItem }: { tombolaItem: PenaltyTombolaItem }) => (
    <>
        <div className="h-25">
            <Icon
                icon={faSkullCrossbones}
                className="text-[#dc143c] text-[4rem] filter-(--tombola-penalty-drop-shadow-filter) penalty-shake" />
        </div>

        <div className="text-[1.25rem] font-bold text-tequila mb-1 mt-5">
            {tombolaItem.penaltyName}
        </div>
    </>
)