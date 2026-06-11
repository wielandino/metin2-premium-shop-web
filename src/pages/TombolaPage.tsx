import { useState } from "react"
import { TicketCount } from "../components/pages/TombolaPage/TicketCount"
import { TombolaTierCard } from "../components/pages/TombolaPage/TombolaTierCard"
import type { TombolaTier } from "../api/types/TombolaTier"
import { TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_GOLD, TOMBOLA_TIER_SILBER } from "../testing/mock/TombolaMocking"
import { TombolaWheel } from "../components/pages/TombolaPage/TombolaWheel"
import { MainContainer } from "../components/common/MainContainer"

export const TombolaPage = () => {

    const tombolaTiers: TombolaTier[] = [TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_SILBER, TOMBOLA_TIER_GOLD]; // Mock data!
    const [selectedTier, setSelectedTier] = useState<TombolaTier>(tombolaTiers[1]);

    return (
        <MainContainer activeTabId="tombola" pageHeaderName="Tombola">

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

            {selectedTier && <TombolaWheel selectedTombolaTier={selectedTier} />}
        </MainContainer>
    )
}