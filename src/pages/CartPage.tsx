import { MainContainer } from "../components/common/MainContainer";
import { Icon } from "../components/common/Icon";
import { CartItemCard } from "../components/pages/CartPage/CartItemCard";
import { CartOrderSummary } from "../components/pages/CartPage/CartOrderSummary";
import { EmptyCart } from "../components/pages/CartPage/EmptyCart";
import { PurchaseSuccess } from "../components/pages/CartPage/PurchaseSuccess";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext/CartContext";

export const CartPage = () => {
    const cartContext = useContext(CartContext);
    const [purchased, setPurchased] = useState(false);

    if (purchased) {
        return (
            <MainContainer activeTabId="home" pageHeaderName="Warenkorb">
                <PurchaseSuccess />
            </MainContainer>
        );
    }

    if (!cartContext || cartContext.cartItems.length === 0) {
        return (
            <MainContainer activeTabId="home" pageHeaderName="Warenkorb">
                <EmptyCart />
            </MainContainer>
        );
    }

    return (
        <MainContainer activeTabId="home" pageHeaderName="Warenkorb">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
                <div className="flex-1 space-y-3 sm:space-y-4">

                    <div className="flex items-center justify-between bg-[rgba(0,0,0,0.25)] px-3 sm:px-4 py-2 rounded-sm">
                        <span className="text-[#f2e69f] text-sm sm:text-base">
                            <Icon icon="shopping-cart" className="mr-2" />
                            {cartContext.cartItems.length} Artikel
                        </span>
                        <button
                            className="text-[#eade9e] hover:text-red-400 text-xs sm:text-sm transition-colors flex items-center gap-1"
                            onClick={() => cartContext.clearCart()}>
                            <Icon icon="trash-can" />
                            Warenkorb leeren
                        </button>
                    </div>

                    {cartContext.cartItems.map((item) => (
                        <CartItemCard key={item.item.id} cartItem={item} />
                    ))}

                </div>

                <div className="w-full lg:w-72 shrink-0">
                    <CartOrderSummary onPurchase={() => setPurchased(true)} />
                </div>
            </div>
        </MainContainer>
    );
};
