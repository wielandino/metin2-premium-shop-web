import { useEffect, useReducer } from "react";
import { CartContext, type CartContextType } from "./CartContext";
import { cartReducer } from "./cartReducer";

type CartProviderProps = {
    children: React.ReactNode;
};

const CART_KEY = "cart";

const getInitialCart = () => {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatcher] = useReducer(cartReducer, { cartItems: getInitialCart() });

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems));
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
