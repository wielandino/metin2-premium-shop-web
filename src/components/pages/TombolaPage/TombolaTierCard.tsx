import type { TombolaTier } from "../../../models/TombolaTier"

interface TombolaTierCardProps {
    tombolaTier: TombolaTier,
    onTombolaTierClick: (tier: TombolaTier) => void,
    isTierSelected: Boolean
}

export const TombolaTierCard = ({
    tombolaTier,
    onTombolaTierClick,
    isTierSelected
}: TombolaTierCardProps) => {

    const tierStyles: Record<string, { defaultCss: string, activeCss: string }> = {
        bronze: {
            defaultCss: "border-[#cd7f32]",
            activeCss: "border-[#cd7f32] bg-linear-to-br from-[#cd7f32] to-[#8b5a00] shadow-lg scale-105"
        },

        silver: {
            defaultCss: "border-[#c0c0c0]",
            activeCss: "border-[#c0c0c0] bg-linear-to-br from-[#c0c0c0] to-[#808080] shadow-lg scale-105"
        },

        gold: {
            defaultCss: "border-[#ffd700]",
            activeCss: "border-[#ffd700] bg-linear-to-br from-[#ffd700] to-[#daa520] shadow-lg scale-105"
        }
    }

    const currentTierButtonStyle = (isTierSelected)
        ? tierStyles[tombolaTier.tierLevel].activeCss
        : tierStyles[tombolaTier.tierLevel].defaultCss;

    const currentTierFontStyle = (isTierSelected) 
        ? "text-[#3c1e16]" 
        : "text-[#f2e69f]";

    return (
        <>
            <button
                className={`p-3 sm:p-4 border-2 transition-all bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] ${currentTierButtonStyle}`}
                onClick={() => onTombolaTierClick(tombolaTier)}>

                <h3 className={`text-base sm:text-lg font-bold mb-2 ${currentTierFontStyle}`}>{tombolaTier.tierName}-Stufe</h3>
                <div className={`text-xs sm:text-sm mb-2 ${currentTierFontStyle}`}>Kosten: {tombolaTier.tierCost.toString()} Tickets</div>
                <p className={`text-xs ${currentTierFontStyle}`}>{tombolaTier.tierDescription}</p>

            </button>
        </>
    )
}