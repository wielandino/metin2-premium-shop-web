import { useEffect, useReducer } from "react";
import { CartContext, type CartContextType } from "./CartContext";
import { cartReducer } from "./cartReducer";

type CartProviderProps = {
    children: React.ReactNode;
};

const CART_KEY = "cart";

const getInitialCart = () => {
    try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatcher] = useReducer(cartReducer, null, () => ({
        cartItems: getInitialCart()
    }));

    useEffect(() => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
        } catch {
            // Need to decide what to do
        }
    }, [state.cartItems]);

    const value: CartContextType = {
        cartItems: state.cartItems,
        addItem: (item, quantity) => dispatcher({ type: "ADD_ITEM", payload: { item, quantity } }),
        removeCartItem: (item) => dispatcher({ type: "REMOVE_CART_ITEM", payload: { item } }),
        clearCart: () => dispatcher({ type: "CLEAR_CART" }),
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
