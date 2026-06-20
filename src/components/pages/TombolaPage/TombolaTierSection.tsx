import { useTombolaData } from "../../../customHooks/Tombola/useTombolaData";
import { TombolaTierCard } from "./TombolaTierCard";
import { TombolaWheel } from "./TombolaWheel";

export const TombolaTierSection = () => {
    const { tiers, tierItems, selectedTier, setSelectedTier } = useTombolaData();

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