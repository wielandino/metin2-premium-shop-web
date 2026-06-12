import { useState } from "react"
import { TombolaTierCard } from "../components/pages/TombolaPage/TombolaTierCard"
import type { TombolaTier } from "../api/types/TombolaTier"
import { TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_GOLD, TOMBOLA_TIER_SILBER } from "../testing/mock/TombolaMocking"
import { TombolaWheel } from "../components/pages/TombolaPage/TombolaWheel"
import { MainContainer } from "../components/common/MainContainer"
import { useTranslation } from "react-i18next"
import { useUserContext } from "../context/UserContext/UserContext"
import { TOMBOLA_CONFIGURATION } from "../config/TombolaConfiguration"

export const TombolaPage = () => {

    const tombolaTiers: TombolaTier[] = [TOMBOLA_TIER_BRONZE, TOMBOLA_TIER_SILBER, TOMBOLA_TIER_GOLD]; // Mock data!
    const [selectedTier, setSelectedTier] = useState<TombolaTier>(tombolaTiers[1]);
    const user = useUserContext();

    const { t } = useTranslation();

    return (
        <MainContainer activeTabId="tombola" pageHeaderName={t('header.navigation.tombola')}>

            <div className="bg-[rgba(0,0,0,0.3)] border-2 border-tequila text-center p-3 sm:p-4 mb-4 sm:mb-5">
                <span className="text-[#f2e69f] text-lg sm:text-xl font-bold">{t('tombola.remainingTickets')} {user.tombolaTickets}</span>
                <p className="text-xs sm:text-sm text-[#f2e69f]">{t('tombola.dailyTickets', { dailyTickets: TOMBOLA_CONFIGURATION.dailyTickets })}</p>
            </div>

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

            {selectedTier &&
                <TombolaWheel selectedTombolaTier={selectedTier} />
            }
        </MainContainer>
    )
}