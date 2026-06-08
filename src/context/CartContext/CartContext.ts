import { createContext } from "react";
import type { ShopItem } from "../../api/types/ShopItem";
import type { CartItem } from "../../api/types/CartItem";

export type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: ShopItem, quantity: number) => void;
    removeCartItem: (item: CartItem) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
