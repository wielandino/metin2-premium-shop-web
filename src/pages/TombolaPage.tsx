import { useEffect, useState } from "react"
import { Navigation } from "../components/common/Navigation/Navigation"
import { Header } from "../components/pages/ShopPage/Header"
import { TicketCount } from "../components/pages/TombolaPage/TicketCount"
import { TombolaTierCard } from "../components/pages/TombolaPage/TombolaTierCard"
import type { TombolaTier } from "../models/TombolaTier"
import { TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_GOLD, TOMBOLA_TIER_SILBER } from "../testing/mock/TombolaMocking"

export const TombolaPage = () => {

    const [tombolaTiers, setTombolaTiers] = useState<TombolaTier[]>([]);
    const [selectedTier, setSelectedTier] = useState<TombolaTier>();

    useEffect(() => {
        //TODO: API CALL
        const tiers = [TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_SILBER, TOMBOLA_TIER_GOLD];
        setTombolaTiers(tiers);
        setSelectedTier(tiers[1]);
    }, []);

    return (
        <>
            <div className="metin-container page-image mx-auto">
                <Header />

                <div className="px-3 sm:px-4 md:px-5">
                    <div className="mt-2">
                        <Navigation
                            activeTab="tombola"
                        />
                    </div>
                    <div className="mt-3 sm:mt-4 md:mt-5">
                        <h2 className="item-sample text-[#f2e69f] border-[#E8A314] mb-2 sm:mb-2.5 border-b text-lg sm:text-xl md:text-2xl">
                            Tombola
                        </h2>
                    </div>

                    <TicketCount />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
                        {tombolaTiers.map((tombolaTier) => {
                            return (
                                <TombolaTierCard
                                    tombolaTier={tombolaTier}
                                    onTombolaTierClick={setSelectedTier}
                                    isTierSelected={selectedTier == tombolaTier}
                                    key={tombolaTier.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}