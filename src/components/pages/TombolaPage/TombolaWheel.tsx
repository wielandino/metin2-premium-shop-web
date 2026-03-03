import { useEffect, useMemo, useRef, useState } from "react"
import type { TombolaTier } from "../../../models/TombolaTier"
import { Button } from "../../common/Button"
import { TombolaItemSlot } from "./TombolaItemSlot"
import type { TombolaItem } from "../../../models/TombolaItem"

interface TombolaWheelProps {
    selectedTombolaTier: TombolaTier
}

export const TombolaWheel = ({ selectedTombolaTier }: TombolaWheelProps) => {

    const [activeTombolaItemSlot, setActiveTombolaItemSlot] = useState<TombolaItem>(selectedTombolaTier.tombolaItems[0]);

    const [isWheelStopped, setIsWheelStopped] = useState(false);
    const [rolledItem, setRolledItem] = useState<TombolaItem>();

    const allTierItems = selectedTombolaTier.tombolaItems;

    const currentTotalWeight = useMemo(
        () => allTierItems.reduce((sum, item) => sum + item.rollChance, 0),
        [selectedTombolaTier]
    );

    const totalSpinningRounds = 5;

    const inactiveSpinningInterval = 1500;

    const wheelInterval = useRef(0);
    let currentSlotIdx = 0;

    function spinWheelInterval(time: number = 1500) {
        if (wheelInterval.current !== undefined)
            clearInterval(wheelInterval.current);

        wheelInterval.current = setInterval(() => {
            setActiveTombolaItemSlot(prev => {
                currentSlotIdx = allTierItems.findIndex(i => i.id === prev?.id);
                return allTierItems[currentSlotIdx + 1] ?? allTierItems[0];
            });
        }, time);
    }

    function stopWheelOnItem(targetItem: TombolaItem) {
        clearInterval(wheelInterval.current);

        let idx = allTierItems.findIndex(i => i.id === activeTombolaItemSlot?.id);
        const targetIdx = allTierItems.findIndex(i => i.id === targetItem.id);

        const fullRotations = allTierItems.length * totalSpinningRounds;
        let stepsToTarget = (targetIdx - idx + allTierItems.length) % allTierItems.length;
        const totalSteps = fullRotations + stepsToTarget;

        let step = 0;
        function tick() {
            idx = (idx + 1) % allTierItems.length;
            setActiveTombolaItemSlot(allTierItems[idx]);
            step++;

            if (step < totalSteps) {
                const progress = step / totalSteps;
                const delay = 80 + 400 * Math.pow(progress, 3);
                setTimeout(tick, delay);
            } else {
                setIsWheelStopped(true);
            }
        }

        setTimeout(tick, 80);
    }

    useEffect(() => {
        setActiveTombolaItemSlot(allTierItems[0]);
        spinWheelInterval(inactiveSpinningInterval);

        return () => clearInterval(wheelInterval.current);
    }, [selectedTombolaTier]);

    useEffect(() => {
        if (isWheelStopped)
            clearInterval(wheelInterval.current);
    }, [isWheelStopped])

    useEffect(() => {
        if (rolledItem === undefined)
            return;

        stopWheelOnItem(rolledItem);
    }, [rolledItem])

    function calculateRolledItem() {

        let random = Math.random() * currentTotalWeight;

        for (const item of allTierItems) {
            random -= item.rollChance;

            if (random <= 0) {
                setRolledItem(item);
                break;
            }
        }
    }

    return (
        <>
            <div className="tombola-container">
                <div className="tombola-wrapper border-solid border border-[#662d12] h-122.25">
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
                            <Button title="Drehen" className="base-green-btn min-w-50" onClick={calculateRolledItem} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}