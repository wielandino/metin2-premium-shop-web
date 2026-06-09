import clsx from "clsx";
import { Button } from "./Button/Button";

interface RewardCardProps {
    cardTitle: string;
    onCloseBtnText: string;
    children: React.ReactNode;
    isModal: boolean;
    onClose: () => void;
}

export const RewardCard = ({ cardTitle, onCloseBtnText, children, isModal, onClose }: RewardCardProps) => {



    return (
        <div className={clsx(
            "bg-[#ede0af] border-tequila border-2 border-solid",
            "shadow-(--reward-card-box-shadow)",
            "max-w-100 m-auto",
            {
                "reward-pop-in reward-pop-in-animation": isModal,
            })}>
            <div className="reward-header p-4 text-center">
                <h3 className="text-[#3c1e16] text-2xl">{cardTitle}</h3>
            </div>

            <div className="p-8 m-auto text-center">
                {children}
            </div>

            <div className="p-4">
                <Button
                    title={onCloseBtnText}
                    className={"base-green-btn w-full"}
                    onClick={onClose} />
            </div>

        </div>
    )
}