import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import { MainContainer } from "../../common/MainContainer";

export const PurchaseSuccess = () => {
    return (
        <MainContainer activeTabId="home" pageHeaderName="Warenkorb">
            <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-600/30 border-2 border-green-500 flex items-center justify-center mb-5 animate-modal-in">
                    <Icon icon="check" className="text-4xl sm:text-5xl text-green-400" />
                </div>
                <h3 className="text-[#f2e69f] text-2xl sm:text-3xl mb-2">
                    Kauf erfolgreich!
                </h3>
                <p className="text-[#eade9e] text-sm sm:text-base mb-6 max-w-md">
                    Vielen Dank für deinen Einkauf. Die Gegenstände wurden deinem Account gutgeschrieben.
                </p>
                <Link
                    to="/"
                    className="base-green-btn inline-block px-8 py-2 no-underline hover:no-underline"
                >
                    Zurück zum Shop
                </Link>
            </div>
        </MainContainer>
    );
};