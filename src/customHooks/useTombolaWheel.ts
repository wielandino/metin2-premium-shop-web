import { useEffect, useMemo, useRef, useState } from "react";
import type { TombolaTier } from "../api/types/TombolaTier";
import type { TombolaItem } from "../api/types/TombolaItem";

export function useTombolaWheel(selectedTombolaTier: TombolaTier) {
    const allTierItems = selectedTombolaTier.tombolaItems;

    const [activeTombolaItemSlot, setActiveTombolaItemSlot] = useState<TombolaItem>(allTierItems[0]);
    const [isWheelStopped, setIsWheelStopped] = useState(false);
    const [isWheelSpinning, setIsWheelSpinning] = useState(false);
    const [rolledItem, setRolledItem] = useState<TombolaItem>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentIdx = useRef(0);
    const wheelInterval = useRef(0);

    const totalSpinningRounds = 5;
    const inactiveSpinningInterval = 1500;

    const currentTotalWeight = useMemo(
        () => allTierItems.reduce((sum, item) => sum + item.rollChance, 0),
        [allTierItems]
    );

    function spinWheelInterval(time: number = 1500) {
        if (wheelInterval.current !== undefined)
            clearInterval(wheelInterval.current);

        wheelInterval.current = setInterval(() => {
            setActiveTombolaItemSlot(prev => {
                currentIdx.current = allTierItems.findIndex(i => i.id === prev?.id);
                return allTierItems[currentIdx.current + 1] ?? allTierItems[0];
            });
        }, time);
    }

    function openResultModal() {
        setIsWheelStopped(true);
        setIsWheelSpinning(false);
        setIsModalOpen(true);
    }

    function stopWheelOnItem(targetItem: TombolaItem) {
        clearInterval(wheelInterval.current);

        const targetIdx = allTierItems.findIndex(i => i.id === targetItem.id);
        const fullRotations = allTierItems.length * totalSpinningRounds;
        const stepsToTarget = (targetIdx - currentIdx.current + allTierItems.length) % allTierItems.length;
        const totalSteps = fullRotations + stepsToTarget;

        let step = 0;
        setIsWheelSpinning(true);

        function tick() {
            currentIdx.current = (currentIdx.current + 1) % allTierItems.length;
            setActiveTombolaItemSlot(allTierItems[currentIdx.current]);
            step++;

            if (step < totalSteps) {
                const progress = step / totalSteps;
                const delay = 80 + 400 * Math.pow(progress, 3);
                setTimeout(tick, delay);
            } else {
                setTimeout(openResultModal, 800);
            }
        }

        setTimeout(tick, 80);
    }

    function calculateRolledItem() {
        if (isWheelSpinning) return;

        let random = Math.random() * currentTotalWeight;

        for (const item of allTierItems) {
            random -= item.rollChance;
            if (random <= 0) {
                setRolledItem(item);
                break;
            }
        }
    }

    function handleCloseResultModal() {
        setRolledItem(undefined);
        setIsModalOpen(false);
    }

    useEffect(() => {
        setActiveTombolaItemSlot(allTierItems[0]);
        spinWheelInterval(inactiveSpinningInterval);
        return () => clearInterval(wheelInterval.current);
    }, [selectedTombolaTier]);

    useEffect(() => {
        if (isWheelStopped)
            clearInterval(wheelInterval.current);
    }, [isWheelStopped]);

    useEffect(() => {
        if (rolledItem === undefined) return;
        stopWheelOnItem(rolledItem);
    }, [rolledItem]);

    return {
        activeTombolaItemSlot,
        isWheelSpinning,
        rolledItem,
        isModalOpen,
        calculateRolledItem,
        handleCloseResultModal,
    };
}
