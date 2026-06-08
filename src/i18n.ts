import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const savedLanguage = localStorage.getItem('language') ?? 'de';

i18n.use(initReactI18next).init({
    lng: savedLanguage,
    debug: true,
    fallbackLng: "en",

    resources: {
        de: {
            translation: {
                header: {
                    navigation: {
                        all: "Alle Artikel",
                        new: "Neue Artikel",
                        hot: "Beliebte Artikel",
                        tombola: "Tombola",
                    }
                },

                common: {
                    price: "Preis",
                    quantity: "Menge",
                    selectQuantity: "Menge auswählen",
                    buyNow: "Kaufen",
                    article: "Artikel",
                    goShop: "Zum Shop",
                    pieceShort: "Stk.",
                    pieceLong: "Stück",
                    topUp: "DR Aufladen",
                },

                cartPage: {
                    common: {
                        cartHeader: "Warenkorb",
                        emptyCartAction: "Warenkorb leeren",
                    },

                    cartSummary: {
                        cartSummary: "Bestellübersicht",
                        subTotal: "Zwischensumme",
                        total: "Gesamtsumme",
                        balance: "Dein Guthaben",
                        remainingBalance: "Verbleibend nach Kauf",
                        notEnoughBalance: "Nicht genügend Guthaben. Bitte lade DR auf."
                    },

                    emptyCart: {
                        emptyCart: "Dein Warenkorb ist leer",
                        emptyCartSub: "Füge Items in deinen Warenkorb hinzu",
                    },

                    successBuy: {
                        successBuy: "Kauf erfolgreich!",
                        successBuySub: "Vielen Dank für deinen Einkauf. Die Gegenstände wurden deinem Account gutgeschrieben.",
                    },

                },

                topUp: {
                    chargeNow: "Jetzt aufladen",
                },

                tombola: {
                    remainingTickets: "Verfügbare Tickets:",
                    roll: "Drehen",
                }
            }
        },

        en: {
            translation: {
                header: {
                    navigation: {
                        all: "All Articles",
                        new: "New Articles",
                        hot: "Hot Articles",
                        tombola: "Tombola"
                    }
                },

                common: {
                    price: "Price",
                    quantity: "Quantity",
                    selectQuantity: "Select quantity",
                    buyNow: "Buy",
                    article: "Article",
                    goShop: "Visit Shop",
                    pieceShort: "pcs.",
                    pieceLong: "Piece",
                    topUp: "Buy DR",
                },

                cartPage: {
                    common: {
                        cartHeader: "Shopping Cart",
                        emptyCartAction: "Empty Shopping Cart",
                    },

                    cartSummary: {
                        cartSummary: "Order Summary",
                        subTotal: "Sub Total",
                        total: "Total",
                        balance: "Your balance",
                        remainingBalance: "Remaining after purchase",
                        notEnoughBalance: "Insufficient balance. Please top up your DR account."
                    },

                    emptyCart: {
                        emptyCart: "Your shopping cart is empty",
                        emptyCartSub: "Add items to your shopping cart",
                    },

                    successBuy: {
                        successBuy: "Purchase successful!",
                        successBuySub: "Thank you for your purchase. The items have been added to your account.",
                    },

                },

                topUp: {
                    selectPayment: "Select payment method",
                    selectPackage: "Select DR package",
                    popular: "Popular",
                    bonus: "+{{bonus}} DR Bonus",
                    chargeNow: "Charge now",
                },

                tombola: {
                    remainingTickets: "Available tickets",
                    roll: "Roll",
                }
            }
        }
    }
})