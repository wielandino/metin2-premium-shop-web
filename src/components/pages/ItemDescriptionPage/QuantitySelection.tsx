import { useMemo } from "react";


type QuantitySelectionProps = {
    maxQuantity: number
    quantityPercentDelimeter: number,
    selectedQuantity: number,
    setSelectedQuantity: (quantity: number) => void
}

export const QuantitySelection = ({ maxQuantity, quantityPercentDelimeter, selectedQuantity, setSelectedQuantity }: QuantitySelectionProps) => {


    const possibleQuantities = useMemo(() => {
        if (maxQuantity === 1) {
            return [1];
        }
        
        const quantities: number[] = [1];
        const steps = Math.floor(maxQuantity / quantityPercentDelimeter);
    
        for (let i = 1; i <= steps; i++) {
            quantities.push(i * quantityPercentDelimeter);
        }

        return quantities;

    }, [maxQuantity, quantityPercentDelimeter]);


    return(
        <>
        <p>Anzahl auswählen</p>
        {possibleQuantities.map((quantity) => {

                const isActive = selectedQuantity === quantity;
                return (
                    
                    <button className={`quantity-btn mr-2 ${isActive ? 'quantity-btn-active' : ''}`} 
                            key={quantity}
                            onClick={() => setSelectedQuantity(quantity)}>
                                {quantity}
                    </button>
                )
            }
        )}
        
        </>
    )
}
