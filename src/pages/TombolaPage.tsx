import { TombolaTierCard } from "../components/pages/TombolaPage/TombolaTierCard"
import { TombolaWheel } from "../components/pages/TombolaPage/TombolaWheel"
import { MainContainer } from "../components/common/MainContainer"
import { useTranslation } from "react-i18next"
import { useUserContext } from "../context/UserContext/UserContext"
import { TOMBOLA_CONFIGURATION } from "../config/TombolaConfiguration"
import { useTombolaData } from "../customHooks/Tombola/useTombolaData"

const TombolaTierSection = () => {
    const { tiers, tierItems, selectedTier, setSelectedTier } = useTombolaData();

    console.log(tierItems)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
                {tiers.map((tombolaTier) => (
                    <TombolaTierCard
                        tombolaTier={tombolaTier}
                        onTombolaTierClick={setSelectedTier}
                        isTierSelected={selectedTier == tombolaTier}
                        key={tombolaTier.id} />
                ))}
            </div>

            <TombolaWheel selectedTombolaTier={selectedTier} tierItems={tierItems} />
        </>
    )
}

export const TombolaPage = () => {
    const user = useUserContext();
    const { t } = useTranslation();

    return (
        <MainContainer activeTabId="tombola" pageHeaderName={t('header.navigation.tombola')}>

            <div className="bg-[rgba(0,0,0,0.3)] border-2 border-tequila text-center p-3 sm:p-4 mb-4 sm:mb-5">
                <span className="text-[#f2e69f] text-lg sm:text-xl font-bold">{t('tombola.remainingTickets')} {user.tombolaTickets}</span>
                <p className="text-xs sm:text-sm text-[#f2e69f]">{t('tombola.dailyTickets', { dailyTickets: TOMBOLA_CONFIGURATION.dailyTickets })}</p>
            </div>


            <TombolaTierSection />

        </MainContainer>
    )
}
