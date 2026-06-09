import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../common/Icon";

interface TombolaRewardCardProps {
    isFail: boolean;
    rewardName: string;
    priceIcon?: string;
}


export const TombolaRewardCard = ({ isFail, rewardName, priceIcon }: TombolaRewardCardProps) => {
    
    return (
        <>
            <div className="m-auto">
                <div className="h-25">
                    {isFail ?
                        (
                            <Icon
                                icon={faSkullCrossbones}
                                className="text-[#dc143c] text-[4rem] filter-(--tombola-penalty-drop-shadow-filter) penalty-shake" />
                        ) : (
                            <img
                                src={"/images/items/" + priceIcon + ".png"}
                                className="w-full h-full object-contain filter-(--tombola-item-icon-filter)" />
                        )}
                </div>

                <div className="text-[1.25rem] font-bold text-tequila mb-1 mt-5">
                    {rewardName}
                </div>

                <div className="">
                    
                </div>
            </div>
        </>
    )
};
