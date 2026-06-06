import { createContext, useReducer } from "react";
import type { ShopItem } from "../api/types/ShopItem";
import type { CartItem } from "../api/types/CartItem";
import type { Item } from "../api/types/Item";

type CartProviderProps = {
    children: React.ReactNode;
}

type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: ShopItem, quantity: number) => void;
}

type CartAction =
    | { type: "ADD_ITEM"; payload: { item: ShopItem; quantity: number } }

type CartState = {
    cartItems: CartItem[]
}

const reducer = (state: CartState, action: CartAction): CartState => {

    switch (action.type) {
        case "ADD_ITEM":
            
    }

    console.log(action)

    return state;
}

const changeItemQuantity = (currentState: CartState, itemRef: Item, quantity: number, type: 'add' | 'remove'): CartState => {
    return {
        ...currentState,
        cartItems: currentState.cartItems.map(item => {
            if (item.item.id !== itemRef.id) return item;
            
            const delta = type === 'add' ? quantity : -quantity;
            return { ...item, quantity: item.quantity + delta };
        })
    };
};


const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: CartProviderProps) => {

    const [state, dispatcher] = useReducer(reducer, { cartItems: [] });

    const addItem = (item: ShopItem, quantity: number) => {
        dispatcher({ type: "ADD_ITEM", payload: { item, quantity } })
    }

    const value: CartContextType = {
        cartItems: state.cartItems,
        addItem: addItem
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider }