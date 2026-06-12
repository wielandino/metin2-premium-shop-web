import clsx from "clsx"

interface SlotShellProps {
    isSlotActive: boolean
    slotVariant: string
    rollChance: number
    icon: React.ReactNode
    name: React.ReactNode
}

export const SlotShell = ({ isSlotActive, slotVariant, rollChance, icon, name }: SlotShellProps) => {
    const slotTextCssClass = isSlotActive
        ? "text-[#3c1e16] text-shadow-(--tombola-slot-active-text-shadow)"
        : "text-(--golden-fleece) text-shadow-(--custom-text-shadow)"

    return (
        <div className={clsx(
            "tombola-item-slot p-4",
            "border-2 border-solid",
            "shadow-[0_1px_2px_#0000004d] bg-black/25",
            { [slotVariant]: isSlotActive }
        )}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 text-center">
                    {icon}
                </div>
                <div className={`${slotTextCssClass} text-[.75rem] text-center font-bold min-h-10 leading-5`}>
                    {name}
                </div>
                <div className={`${slotTextCssClass} text-[.7rem]`}>{rollChance.toString()}%</div>
            </div>
        </div>
    )
}
