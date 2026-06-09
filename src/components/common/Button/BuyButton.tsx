import type { ShopItem } from '../../../api/types/ShopItem';
import { useLocalizedItem } from '../../../utils/useLocalizedItemHook';
import { Button } from './Button';

type BuyButtonProps = {
    shopItem: ShopItem;
    quantity?: number;
    title?: string
}

export const BuyButton = ({ shopItem, quantity = 1, title = "Kaufen" }: BuyButtonProps) => {
    const baseStyle = "base-green-btn w-full"
    const itemLocalization = useLocalizedItem(shopItem);
    
    const handlePurchase = async () => {
        try {
            alert(`Buy ${quantity}x ${itemLocalization.name}!`);
        } catch (error) {
            console.error('Error:', error);
        };
    }

    return (
        <Button title={title}
            onClick={handlePurchase}
            className={baseStyle} />
    );
}
