import { createContext, useContext } from "react";
import type { ShopItem } from "../../api/types/ShopItem";
import type { CartItem } from "../../api/types/CartItem";

export type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: ShopItem, quantity: number) => void;
    removeCartItem: (item: CartItem) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCartContext(): CartContextType {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCartContext must be used within <CartProvider>");
    }
    return ctx;
}