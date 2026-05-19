import { NavigationHeader } from "../components/common/Navigation/NavigationHeader";
import { Navigation } from "../components/common/Navigation/Navigation";

export const CartPage = ({ }) => {


    return (
        <>
            <div className="metin-container page-image mx-auto">
                <NavigationHeader />

                <div className="px-3 sm:px-4 md:px-5">
                    <div className="mt-2">
                        <Navigation activeTabId="home" />
                    </div>

                    <div className="mt-3 sm:mt-4 md:mt-5">
                        <h2 className="item-sample text-[#f2e69f] border-[#E8A314] mb-2 sm:mb-2.5 border-b text-lg sm:text-xl md:text-2xl">
                            Warenkorb
                        </h2>
                    </div>

                    
                </div>
            </div>
        </>
    );
}