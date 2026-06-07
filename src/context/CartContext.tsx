import { createContext, useReducer } from "react";
import type { ShopItem } from "../api/types/ShopItem";
import type { CartItem } from "../api/types/CartItem";

type CartProviderProps = {
    children: React.ReactNode;
}

type CartContextType = {
    cartItems: CartItem[];
    addItem: (item: ShopItem, quantity: number) => void;
    removeCartItem: (item: CartItem) => void;
    clearCart: () => void;
}

type CartAction =
    | { type: "ADD_ITEM"; payload: { item: ShopItem; quantity: number } }
    | { type: "REMOVE_CART_ITEM"; payload: { item: CartItem } }
    | { type: "CLEAR_CART"; }

type CartState = {
    cartItems: CartItem[]
}

const reducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM": {
            const { item, quantity } = action.payload;
            const existingItem = state.cartItems.find(ci => ci.item.id === item.id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(ci =>
                        ci.item.id === item.id
                            ? { ...ci, quantity: ci.quantity + quantity }
                            : ci
                    )
                };
            }


            const itemPrice = item.price;

            return {
                ...state,
                cartItems: [...state.cartItems, {
                    item,
                    quantity,
                    pricePerQuantity: itemPrice
                }]
            };
        }

        case "CLEAR_CART": {
            return {
                cartItems: []
            }
        }

        case "REMOVE_CART_ITEM": {
            const cartItem = action.payload.item;
            const existingItem = state.cartItems.find(ci => ci === cartItem);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(ci => ci != existingItem)
                }
            }

            return {
                ...state
            }
        }

        default:
            return state;
    }
}


const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: CartProviderProps) => {

    const [state, dispatcher] = useReducer(reducer, { cartItems: [] });

    const addItem = (item: ShopItem, quantity: number) => dispatcher({ type: "ADD_ITEM", payload: { item, quantity } })
    const removeCartItem = (item: CartItem) => dispatcher({ type: "REMOVE_CART_ITEM", payload: { item } })
    const clearCart = () => dispatcher({ type: "CLEAR_CART" })

    const value: CartContextType = {
        cartItems: state.cartItems,
        addItem: addItem,
        clearCart: clearCart,
        removeCartItem: removeCartItem
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider }