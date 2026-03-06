import clsx from "clsx";

interface RewardCardProps {
    cardTitle: string;
    onCloseBtnText: string;
    children: React.ReactNode;
    isModal: boolean
}

export const RewardCard = ({ cardTitle, onCloseBtnText, children, isModal }: RewardCardProps) => {



    return (
        <>
            <div className={clsx(
                "bg-tequila border-tequila border-2 border-solid",
                "shadow-(--reward-card-box-shadow)",
                "max-w-100",
                {
                    "reward-pop-in reward-pop-in-animation": isModal,
                }
            )}>
                {children}
            </div>
        </>
    )
}