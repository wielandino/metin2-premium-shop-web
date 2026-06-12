import { useEffect, useMemo, useRef, useState } from "react";
import type { TombolaTier } from "../api/types/TombolaTier";
import type { TombolaItem } from "../api/types/Tombola/TombolaItem";
import { TOMBOLA_CONFIGURATION } from "../config/TombolaConfiguration";

export function useTombolaWheel(selectedTombolaTier: TombolaTier) {    
    const tombolaWheelConfiguration = TOMBOLA_CONFIGURATION.wheelConfiguration;

    const allCurrentTierItems = selectedTombolaTier.tombolaItems;

    const [activeTombolaItemSlot, setActiveTombolaItemSlot] = useState<TombolaItem>();
    const [isWheelSpinning, setIsWheelSpinning] = useState(false);
    const [rolledItem, setRolledItem] = useState<TombolaItem>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentIdx = useRef(0);
    const wheelInterval = useRef(0);

    const totalSpinningRounds = tombolaWheelConfiguration.totalSpinningRounds;
    const inactiveSpinningInterval = tombolaWheelConfiguration.inactiveSpinningInterval;

    const currentTotalWeight = useMemo(
        () => allCurrentTierItems.reduce((sum, item) => sum + item.rollChance, 0),
        [allCurrentTierItems]
    );

    useEffect(() => {
        setActiveTombolaItemSlot(allCurrentTierItems[0]);
    }, [allCurrentTierItems]);

    useEffect(() => {
        if (wheelInterval.current !== undefined)
            clearInterval(wheelInterval.current);

        wheelInterval.current = setInterval(() => {
            setActiveTombolaItemSlot(prev => {
                // If there is no previous item we use the first item in the array
                currentIdx.current = allCurrentTierItems.findIndex(i => i.id === prev?.id) ?? allCurrentTierItems[0];
                
                return allCurrentTierItems[currentIdx.current + 1];
            });

        }, inactiveSpinningInterval);

        return () => clearInterval(wheelInterval.current);
    }, [allCurrentTierItems, inactiveSpinningInterval])


    const stopWheelOnItem = (targetItem: TombolaItem) => {
        clearInterval(wheelInterval.current);

        const targetIdx = allCurrentTierItems.findIndex(i => i.id === targetItem.id);
        const fullRotations = allCurrentTierItems.length * totalSpinningRounds;
        const stepsToTarget = (targetIdx - currentIdx.current + allCurrentTierItems.length) % allCurrentTierItems.length;
        const totalSteps = fullRotations + stepsToTarget;

        let step = 0;
        setIsWheelSpinning(true);

        function tick() {
            currentIdx.current = (currentIdx.current + 1) % allCurrentTierItems.length;
            setActiveTombolaItemSlot(allCurrentTierItems[currentIdx.current]);
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

        for (const item of allCurrentTierItems) {
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
        calculateRolledItem,
        handleCloseResultModal,
    };
}
