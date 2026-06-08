import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import { useTranslation } from "react-i18next";

export const EmptyCart = () => {
    const { t } = useTranslation()
    
    return (
        <>
            <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[rgba(0,0,0,0.3)] border-2 border-tequila/40 flex items-center justify-center mb-5">
                    <Icon icon="shopping-cart" className="text-4xl sm:text-5xl text-tequila/60" />
                </div>
                <h3 className="text-[#f2e69f] text-xl sm:text-2xl mb-2">
                    {t('cartPage.emptyCart.emptyCart')}
                </h3>
                <p className="text-[#eade9e] text-sm sm:text-base mb-6 max-w-md">
                    {t('cartPage.emptyCart.emptyCartSub')}
                </p>
                <Link
                    to="/"
                    className="base-green-btn px-8 py-2 no-underline hover:no-underline flex items-center h-5">
                    <Icon icon="arrow-left" className="mr-2" />
                    {t('common.goShop')}
                </Link>
            </div>
        </>
    );
}