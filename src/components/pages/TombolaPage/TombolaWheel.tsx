import type { TombolaTier } from "../../../api/types/TombolaTier"
import { Button } from "../../common/Button/Button"
import { TombolaItemSlot } from "./TombolaSlot/TombolaItemSlot"
import clsx from "clsx"
import { useTombolaWheel } from "../../../customHooks/useTombolaWheel"
import { useTranslation } from "react-i18next"
import { TombolaRewardCard } from "./TombolaRewardCard/TombolaRewardCard"
import { RewardCard } from "../../common/RewardCard"
import { Modal } from "../../common/Modal/Modal"

interface TombolaWheelProps {
    selectedTombolaTier: TombolaTier,
}

export const TombolaWheel = ({ selectedTombolaTier }: TombolaWheelProps) => {
    const { t } = useTranslation()

    const { activeTombolaItemSlot, isWheelSpinning, rolledItem, isModalOpen, calculateRolledItem, handleCloseResultModal }
        = useTombolaWheel(selectedTombolaTier)

    return (
        <div className="tombola-container pb-5">
            <div className="tombola-wrapper border-solid border border-[#662d12] h-122.25 mb.5">
                <div className="m-auto max-w-150 pt-4 pb-4">
                    <div className="grid gap-3 mt-8 grid-cols-4">
                        {selectedTombolaTier.tombolaItems.map((tombolaItem) => {
                            const isSlotActive = activeTombolaItemSlot === tombolaItem

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
                            title={`${isWheelSpinning ? t('tombola.rolling') : `${t('tombola.roll')} (${selectedTombolaTier.tierCost} ${t('common.tickets')})`}`}
                            className={clsx(
                                "base-green-btn min-w-50",
                                { "opacity-50 cursor-not-allowed": isWheelSpinning }
                            )}
                            onClick={calculateRolledItem} />
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseResultModal} showCloseModalBtn={false}>
                {rolledItem && (
                    <RewardCard
                        cardTitle={rolledItem.itemType === "penalty" ? t('tombola.penaltyTitle') : t('tombola.rewardTitle')}
                        onCloseBtnText={t('common.goShop')}
                        isModal={true}
                        onClose={handleCloseResultModal}>
                        <TombolaRewardCard tombolaItem={rolledItem} />
                    </RewardCard>
                )}
            </Modal>
        </div>
    )
}
