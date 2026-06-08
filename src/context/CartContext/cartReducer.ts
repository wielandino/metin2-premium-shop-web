import type { ShopItem } from "../api/types/ShopItem";
import type { CartItem } from "../api/types/CartItem";

export type CartAction =
    | { type: "ADD_ITEM"; payload: { item: ShopItem; quantity: number } }
    | { type: "REMOVE_CART_ITEM"; payload: { item: CartItem } }
    | { type: "CLEAR_CART" };

export type CartState = {
    cartItems: CartItem[];
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM": {
            const { item, quantity } = action.payload;
            const existing = state.cartItems.find(ci => ci.item.id === item.id);

            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(ci =>
                        ci.item.id === item.id
                            ? { ...ci, quantity: ci.quantity + quantity }
                            : ci
                    ),
                };
            }

            return {
                ...state,
                cartItems: [...state.cartItems, { item, quantity, pricePerQuantity: item.price }],
            };
        }

        case "REMOVE_CART_ITEM": {
            return {
                ...state,
                cartItems: state.cartItems.filter(ci => ci !== action.payload.item),
            };
        }

        case "CLEAR_CART":
            return { cartItems: [] };

        default:
            return state;
    }
};
