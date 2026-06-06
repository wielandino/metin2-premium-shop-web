import { Icon } from "../../common/Icon";

export const CartOrderSummary = () => {
    const canAfford = true;

    return (
        <div className="bg-[#eade9e] shadow-[0_1px_2px_#000] p-4 sm:p-5 sticky top-4">
            <h3 className="text-[#5a3825] text-lg font-bold border-b border-[#c4b87a] pb-2 mb-4">
                <Icon icon="receipt" className="mr-2" />
                Bestellübersicht
            </h3>

            <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-[#5a3825]">
                    <span>Zwischensumme</span>
                    <span>25 DR</span>
                </div>
                <div
                    className="flex justify-between text-xs text-[#5a3825]/70 pl-3">
                    <span className="truncate max-w-36">
                        Segensschriftrolle × 1
                    </span>
                    <span className="shrink-0">
                        25 DR
                    </span>
                </div>

            </div>

            <div className="border-t border-[#c4b87a] pt-3 mb-4">
                <div className="flex justify-between items-baseline mb-2">
                    <span className="text-[#5a3825] font-semibold">Gesamtsumme</span>
                    <span className="text-[#5a3825] text-xl font-bold">25 DR</span>
                </div>
                <div className="flex justify-between text-xs text-[#5a3825]/70 mb-1">
                    <span>Dein Guthaben</span>
                    <span className={!canAfford ? "text-red-600 font-bold" : ""}>
                        325 DR
                    </span>
                </div>
                <div className="flex justify-between text-xs text-[#5a3825]/70">
                    <span>Verbleibend</span>
                    <span className={!canAfford ? "text-red-600 font-bold" : "text-green-700"}>
                        300 DR
                    </span>
                </div>
            </div>

            <button
                className={`base-green-btn w-full py-2.5 text-sm sm:text-base flex items-center justify-center gap-2 h-5 ${!canAfford ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                <>
                    <Icon icon="cart-shopping" />
                    Kaufen (25 DR)
                </>
            </button>

            {!canAfford && (
                <p className="text-red-600 text-xs text-center mt-2">
                    Nicht genügend Guthaben. Bitte lade DR auf.
                </p>
            )}
        </div>
    );
}