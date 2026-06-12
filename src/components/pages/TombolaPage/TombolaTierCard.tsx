import { useTranslation } from "react-i18next";
import type { TombolaTier } from "../../../api/types/TombolaTier"
import { tombolaTierStyles } from "../../../utils/tombolaThemeHelper";

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

    const currentTierButtonStyle = (isTierSelected)
        ? tombolaTierStyles[tombolaTier.tierLevel].activeCss
        : tombolaTierStyles[tombolaTier.tierLevel].defaultCss;

    const currentTierFontStyle = (isTierSelected)
        ? "text-[#3c1e16]"
        : "text-[#f2e69f]";

    return (
        <button
            className={`p-3 sm:p-4 border-2 transition-all bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] ${currentTierButtonStyle}`}
            onClick={() => onTombolaTierClick(tombolaTier)}>

            <h3 className={`text-base sm:text-lg font-bold mb-2 ${currentTierFontStyle}`}>{tombolaTier.tierName}-{t('common.tier')}</h3>
            <div className={`text-xs sm:text-sm mb-2 ${currentTierFontStyle}`}>{t('common.cost')}: {tombolaTier.tierCost.toString()} {t('common.ticket')}</div>
            <p className={`text-xs ${currentTierFontStyle}`}>{tombolaTier.tierDescription}</p>

        </button>
    )
}