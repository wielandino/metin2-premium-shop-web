import { useCartContext } from "../context/CartContext/CartContext";
import { useUserContext } from "../context/UserContext/UserContext";

export function useCartOrderSummary(onPurchase: () => void) {
    const cartContext = useCartContext();
    const userContext = useUserContext();

    const totalPrice = cartContext.cartItems.reduce((sum, ci) => sum + ci.pricePerQuantity * ci.quantity, 0);
    const canAfford = userContext.drBalance >= totalPrice;

    function handlePurchase() {
        if (!canAfford || cartContext.cartItems.length === 0) return;

        onPurchase();
        cartContext.clearCart();
    }

    return {
        cartItems: cartContext.cartItems,
        drBalance: userContext.drBalance,
        totalPrice,
        canAfford,
        handlePurchase,
    };
}
