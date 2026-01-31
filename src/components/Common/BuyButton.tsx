import type { ShopItem } from '../../models/ShopItem';
import { Button } from './Button';

type BuyButtonProps = {
  shopItem: ShopItem;
  quantity?: number;
}

export const BuyButton = ({ shopItem, quantity = 1 }: BuyButtonProps) => {
    const baseStyle = "base-green-btn w-full m-auto"
    
    const handlePurchase = async () => {
        try {
            alert(`Buy ${quantity}x ${shopItem.item.name}!`);
        } catch (error) {
            console.error('Error:', error);
        };
    }

    return(
        <>
            <Button title="Kaufen"
                    onClick={handlePurchase}
                    className={baseStyle} />
        </>

    );
}
