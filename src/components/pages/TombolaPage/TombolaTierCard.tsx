import type { TombolaTier } from "../../../models/TombolaTier"

interface TombolaTierCardProps {
    tombolaTier: TombolaTier,
    border?: string,
    onTombolaTierClick: (tier: TombolaTier) => void,
    isTierSelected: Boolean
}

export const TombolaTierCard = ({
    tombolaTier,
    border = "border-[#cd7f32]",
    onTombolaTierClick,
    isTierSelected
}: TombolaTierCardProps) => {

    return (
        <>
            <button
                className={`p-3 sm:p-4 border-2 transition-all ${border} bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)]`}
                onClick={() => onTombolaTierClick(tombolaTier)}>

                <h3 className="text-base sm:text-lg font-bold mb-2 text-[#f2e69f]">{tombolaTier.tierName}-Stufe</h3>
                <div className="text-xs sm:text-sm mb-2 text-[#f2e69f]">Kosten: {tombolaTier.tierCost.toString()} Tickets</div>
                <p className="text-xs text-[#f2e69f]">{tombolaTier.tierDescription}</p>

            </button>
        </>
    )
}