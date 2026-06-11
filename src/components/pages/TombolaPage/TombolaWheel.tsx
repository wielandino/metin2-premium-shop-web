import type { TombolaTier } from "../../../api/types/TombolaTier"
import { Button } from "../../common/Button/Button"
import { TombolaItemSlot } from "./TombolaItemSlot"
import clsx from "clsx"
import { useTombolaWheel } from "../../../customHooks/useTombolaWheel"

interface TombolaWheelProps {
    selectedTombolaTier: TombolaTier
}

export const TombolaWheel = ({ selectedTombolaTier }: TombolaWheelProps) => {
    const { activeTombolaItemSlot, isWheelSpinning, rolledItem, isModalOpen, calculateRolledItem, handleCloseResultModal }
        = useTombolaWheel(selectedTombolaTier);

    return (

        <div className="tombola-container pb-5">
            <div className="tombola-wrapper border-solid border border-[#662d12] h-122.25 mb.5">
                <div className="m-auto max-w-150 pt-4 pb-4">
                    <div className="grid gap-3 mt-8 grid-cols-4">
                        {selectedTombolaTier.tombolaItems.map((tombolaItem) => {
                            const isSlotActive = activeTombolaItemSlot === tombolaItem;

                            return (
                                <TombolaItemSlot
                                    tombolaItem={tombolaItem}
                                    isSlotActive={isSlotActive}
                                    key={`item-slot-${tombolaItem.id}`} />
                            )
                        })}
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                        <Button
                            title={`${isWheelSpinning ? `Dreht...` : `Drehen (${selectedTombolaTier.tierCost} Tickets)`}`}
                            className={clsx(
                                "base-green-btn min-w-50",
                                { "opacity-50 cursor-not-allowed": isWheelSpinning }
                            )}
                            onClick={calculateRolledItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}
