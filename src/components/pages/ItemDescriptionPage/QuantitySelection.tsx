import { useMemo } from "react";


type QuantitySelectionProps = {
    maxQuantity: number
    quantityPackageSplit: number,
    selectedQuantity: number,
    setSelectedQuantity: (quantity: number) => void
}

export const QuantitySelection = ({ maxQuantity, quantityPackageSplit, selectedQuantity, setSelectedQuantity }: QuantitySelectionProps) => {


    const possibleQuantities = useMemo(() => {
        if (maxQuantity === 1) {
            return [1];
        }
        
        const quantities: number[] = [1];
        const minQuantityPackage = maxQuantity / quantityPackageSplit;

        for (let i = 1; i <= quantityPackageSplit; i++) {
            quantities.push(i * minQuantityPackage);
        }

        return quantities;

    }, [maxQuantity, quantityPackageSplit]);


    return(
        <div className="w-full">
            <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-[#5a3825] font-semibold">Anzahl auswählen</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {possibleQuantities.map((quantity) => {
                    const isActive = selectedQuantity === quantity;
                    return (
                        <button
                            className={`quantity-btn ${isActive ? 'quantity-btn-active' : ''}`}
                            key={quantity}
                            onClick={() => setSelectedQuantity(quantity)}>
                            {quantity}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
