import { useEffect, useState } from "react"
import type { TombolaTier } from "../../../models/TombolaTier"
import { Button } from "../../common/Button"
import { TombolaItemSlot } from "./TombolaItemSlot"
import type { TombolaItem } from "../../../models/TombolaItem"

interface TombolaWheelProps {
    selectedTombolaTier: TombolaTier
}

export const TombolaWheel = ({ selectedTombolaTier }: TombolaWheelProps) => {

    const [activeTombolaItemSlot, setActiveTombolaItemSlot] = useState<TombolaItem>(selectedTombolaTier.tombolaItems[0])
    const allTierItems = selectedTombolaTier.tombolaItems;

    useEffect(() => {
        const id = setInterval(() => {
            setActiveTombolaItemSlot(prev => {
                const currentIdx = allTierItems.findIndex(i => i.id === prev?.id);
                return allTierItems[currentIdx + 1] ?? allTierItems[0];
            });
        }, 1500);

        return () => clearInterval(id);
    }, [selectedTombolaTier]);

    useEffect(() => {
        setActiveTombolaItemSlot(allTierItems[0]);
    }, [selectedTombolaTier])


    return (
        <>
            <div className="tombola-container">
                <div className="tombola-wrapper border-solid border border-[#662d12] h-122.25">
                    <div className="m-auto max-w-150 pt-4 pb-4">
                        <div className="grid gap-3 mt-8 grid-cols-4">
                            {selectedTombolaTier.tombolaItems.map((tombolaItem) => {
                                const isSlotActive = activeTombolaItemSlot == tombolaItem;

                                return (

                                    <TombolaItemSlot
                                        tombolaItem={tombolaItem}
                                        isSlotActive={isSlotActive}
                                        key={`item-slot-${tombolaItem.id}`} />
                                )
                            })}
                        </div>

                        <div className="mt-6 flex items-center justify-center">
                            <Button title="Drehen" className="base-green-btn min-w-50" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}