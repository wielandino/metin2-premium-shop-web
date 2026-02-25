import type { TombolaTier } from "../../../models/TombolaTier"

interface TombolaTierCardProps {
    tombolaTier: TombolaTier
}

export const TombolaTierCard = ({ tombolaTier }: TombolaTierCardProps) => {
    return (
        <>
            <button className="p-3 sm:p-4 border-2 transition-all border-[#cd7f32] bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)]">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-[#f2e69f]">Bronze-Stufe</h3>
                <div className="text-xs sm:text-sm mb-2 text-[#f2e69f]">Kosten: 1 Ticket</div>
                <p className="text-xs text-[#f2e69f]">Sichere Gewinne, niedrige Chancen auf DR-Gutschein</p>
            </button>
        </>
    )
}