import { useTranslation } from "react-i18next";
import type { TombolaTier } from "../../../api/types/Tombola/TombolaTier"
import { tombolaTierStyles } from "../../../utils/tombolaThemeHelper";
import { useLocalizedTombolaTier } from "../../../customHooks/useLocalizeHook";

interface TombolaTierCardProps {
    tombolaTier: TombolaTier,
    onTombolaTierClick: (tier: TombolaTier) => void,
    isTierSelected: boolean
}

export const TombolaTierCard = ({
    tombolaTier,
    onTombolaTierClick,
    isTierSelected
}: TombolaTierCardProps) => {

    const { t } = useTranslation();

    const tombolaLocalization = useLocalizedTombolaTier(tombolaTier);

    const currentTierButtonStyle = (isTierSelected)
        ? tombolaTierStyles[tombolaTier.tierLevel].activeCss
        : tombolaTierStyles[tombolaTier.tierLevel].defaultCss;

    const currentTierFontStyle = (isTierSelected)
        ? "text-[#3c1e16]"
        : "text-[#f2e69f]";

    const tombolaTierCost = tombolaTier.tombolaTierSettings.tierCost;

    return (
        <button
            className={`p-3 sm:p-4 border-2 transition-all bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] ${currentTierButtonStyle}`}
            onClick={() => onTombolaTierClick(tombolaTier)}>

            <h3 className={`text-base sm:text-lg font-bold mb-2 ${currentTierFontStyle}`}>{tombolaLocalization.name}-{t('common.tier')}</h3>
            <div className={`text-xs sm:text-sm mb-2 ${currentTierFontStyle}`}>{t('common.cost')}: {tombolaTierCost.toString()} {t('common.tickets')}</div>
            <p className={`text-xs ${currentTierFontStyle}`}>{tombolaLocalization.description}</p>

        </button>
    )
}