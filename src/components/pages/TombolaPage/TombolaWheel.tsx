import type { TombolaTier } from "../../../models/TombolaTier"
import { TombolaItemSlot } from "./TombolaItemSlot"

interface TombolaWheelProps {
    selectedTombolaTier: TombolaTier
}

export const TombolaWheel = ({ selectedTombolaTier }: TombolaWheelProps) => {

    return (
        <>
            <div className="tombola-container">
                <div className="tombola-wrapper border-solid border border-[#662d12] h-122.25">
                    <div className="m-auto max-w-150 pt-4 pb-4">
                        <div className="grid gap-3 mt-8 grid-cols-4">
                            {selectedTombolaTier.tombolaItems.map((tombolaItem) => {
                                return (
                                    <TombolaItemSlot item={tombolaItem}  />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}