import { useEffect, useMemo, useRef, useState } from "react";
import type { TombolaItem } from "../../api/types/Tombola/TombolaItem";
import { TOMBOLA_CONFIGURATION } from "../../config/TombolaConfiguration";

export function useTombolaWheel(currentTierItems: TombolaItem[]) {
    const tombolaWheelConfiguration = TOMBOLA_CONFIGURATION.wheelConfiguration;

    const [activeTombolaItemSlot, setActiveTombolaItemSlot] = useState<TombolaItem>(currentTierItems[0]);
    const [isWheelSpinning, setIsWheelSpinning] = useState(false);
    const [rolledItem, setRolledItem] = useState<TombolaItem>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentIdx = useRef(0);
    const wheelInterval = useRef(0);

    const totalSpinningRounds = tombolaWheelConfiguration.totalSpinningRounds;
    const inactiveSpinningInterval = tombolaWheelConfiguration.inactiveSpinningInterval;

    const currentTotalWeight = useMemo(
        () => currentTierItems.reduce((sum, item) => sum + item.rollChance, 0),
        [currentTierItems]
    );

    useEffect(() => {
        setActiveTombolaItemSlot(currentTierItems[0]);
    }, [currentTierItems]);

    useEffect(() => {
        if (wheelInterval.current !== undefined)
            clearInterval(wheelInterval.current);

        wheelInterval.current = setInterval(() => {
            setActiveTombolaItemSlot(prev => {
                const nextIndex = (currentTierItems.indexOf(prev) + 1) % currentTierItems.length;
                return currentTierItems[nextIndex];
            });

        }, inactiveSpinningInterval);

        return () => clearInterval(wheelInterval.current);
    }, [currentTierItems, inactiveSpinningInterval])


    const stopWheelOnItem = (targetItem: TombolaItem) => {
        clearInterval(wheelInterval.current);

        const targetIdx = currentTierItems.findIndex(i => i.id === targetItem.id);
        const fullRotations = currentTierItems.length * totalSpinningRounds;
        const stepsToTarget = (targetIdx - currentIdx.current + currentTierItems.length) % currentTierItems.length;
        const totalSteps = fullRotations + stepsToTarget;

        let step = 0;
        setIsWheelSpinning(true);

        function tick() {
            currentIdx.current = (currentIdx.current + 1) % currentTierItems.length;
            setActiveTombolaItemSlot(currentTierItems[currentIdx.current]);
            step++;

            if (step < totalSteps) {
                const progress = step / totalSteps;
                const delay = tombolaWheelConfiguration.wheelProgressDelay * Math.pow(progress, 3);
                setTimeout(tick, delay);
            } else {
                clearInterval(wheelInterval.current);
                setTimeout(openResultModal, tombolaWheelConfiguration.openModalDelay);
            }
        }

        setTimeout(tick, tombolaWheelConfiguration.tickTimeout);
    }

    const calculateRolledItem = () => {
        if (isWheelSpinning) return;

        let random = Math.random() * currentTotalWeight;

        for (const item of currentTierItems) {
            random -= item.rollChance;
            if (random <= 0) {
                setRolledItem(item);
                stopWheelOnItem(item);
                break;
            }
        }
    }

    const handleCloseResultModal = () => {
        setRolledItem(undefined);
        setIsModalOpen(false);
    }

    const openResultModal = () => {
        setIsWheelSpinning(false);
        setIsModalOpen(true);
    }

    return {
        activeTombolaItemSlot,
        isWheelSpinning,
        rolledItem,
        isModalOpen,
        currentTierItems,
        calculateRolledItem,
        handleCloseResultModal,
    };
}
