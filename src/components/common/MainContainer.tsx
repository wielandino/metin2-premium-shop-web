import { NavigationHeader } from "./Navigation/NavigationHeader";
import { Navigation } from "./Navigation/Navigation"

interface MainContainerProps {
    children: React.ReactNode;
    activeTabId?: string,
    pageHeaderName?: string
}

export const MainContainer = ({ children, activeTabId, pageHeaderName }: MainContainerProps) => {
    return (
        <div className="metin-container page-image mx-auto">
            <NavigationHeader />

            <div className="px-3 sm:px-4 md:px-5">
                <div className="mt-2">
                    <Navigation activeTabId={activeTabId} />
                </div>

                <div className="mt-3 sm:mt-4 md:mt-5">
                    <h2 className="item-sample text-[#f2e69f] border-[#E8A314] mb-2 sm:mb-2.5 border-b text-lg sm:text-xl md:text-2xl">
                        {pageHeaderName}
                    </h2>

                    {children}
                </div>
            </div>
        </div>
    )
}