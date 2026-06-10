import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { useUserContext } from "../../../context/UserContext/UserContext";
import { useCartContext } from "../../../context/CartContext/CartContext";
import { useTranslation } from "react-i18next";

export const NavigationHeader = () => {

  const userContext = useUserContext();
  const cartContext = useCartContext()

  const cartItemCount = cartContext.cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'de' ? 'en' : 'de';
    localStorage.setItem('language', nextLang);
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="bg-transparent shadow-[0_1px_2px_#662d12] text-[#f2e69f] px-3 sm:px-4 md:px-5 md:pr-12 py-1.5 sm:py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 h-10 sm:h-12">
        <div className="md:col-span-1 flex items-center">
          <div className="flex gap-1.5 sm:gap-2 md:gap-3">
            <div className="metin-logo w-full sm:w-32 md:w-44 items-center shrink-0 hidden md:block"></div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="text-[#f2e69f] hover:text-tequila transition-colors font-bold text-xs px-2 py-1 border border-[#E8A314] rounded mr-5">
                {i18n.language === 'de' ? 'DE' : 'EN'}
              </button>
              <div className="flex items-center md:hidden">
                <Link to="/cart" className="text-[#f2e69f] hover:text-tequila transition-colors relative">
                  <Icon icon="shopping-cart" className="text-xl" />
                  {cartItemCount > 0 && (
                    <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center gap-1 sm:gap-1.5 invisible sm:visible">
            <Icon
              icon="coins"
              className="text-tequila text-base sm:text-lg" />
            <span className="text-[#f2e69f] text-xs sm:text-sm font-bold whitespace-nowrap">
              {userContext.drBalance} DR
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 invisible sm:visible">
            <Icon
              icon="ticket"
              className="text-tequila text-base sm:text-lg" />
            <span className="text-[#f2e69f] text-xs sm:text-sm font-bold whitespace-nowrap">
              {userContext.tombolaTickets} Tickets
            </span>
          </div>

          <Link to="/cart" className="hidden md:block text-[#f2e69f] hover:text-tequila transition-colors relative">
            <Icon
              icon="shopping-cart"
              className="text-xl sm:text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -bottom-1 -left-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/top-up">
            <Button
              title={t('common.topUp')}
              className="base-green-btn min-w-28 sm:min-w-28 md:min-w-40 uppercase h-7 sm:h-8 text-xs sm:text-sm md:text-base text-[1em]!" />
          </Link>
        </div>
      </div>
    </div>
  );
};