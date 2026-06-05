export const CartItem = () => {
    return (
        <>

            <div className="item-card shadow-[0_1px_2px_#000] p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 relative">
                <button
                    className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 flex items-center justify-center close-btn text-white text-sm leading-none hover:scale-110 transition-transform"
                    aria-label={`Item entfernen`}>
                    ×
                </button>

                <div className="shrink-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)] w-full sm:w-24 h-24 sm:h-24">
                    <img
                        src={"/images/items/segi.png"}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-2 min-w-0 pr-6 sm:pr-0">
                    <div className="flex items-start justify-between gap-2">
                        <h4 className="text-[#662d12] text-base sm:text-lg font-semibold leading-tight truncate">
                            Segensschriftrolle
                        </h4>
                        <span className="text-[#662d12] text-base sm:text-lg font-bold whitespace-nowrap shrink-0">
                            25 DR
                        </span>
                    </div>

                    {/* {shopItem.features.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {shopItem.features.slice(0, 2).map((feat, idx) => (
                                <span
                                    key={idx}
                                    className="text-[10px] sm:text-xs bg-[rgba(0,0,0,0.15)] text-[#5a3825] px-1.5 py-0.5 rounded-sm truncate max-w-32"
                                >
                                    {feat}
                                </span>
                            ))}
                            {shopItem.features.length > 2 && (
                                <span className="text-[10px] sm:text-xs text-[#5a3825]">
                                    +{shopItem.features.length - 2}
                                </span>
                            )}
                        </div>
                    )} */}

                    <div className="flex items-center justify-between mt-auto pt-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-[#5a3825]">Menge:</span>
                            <div className="flex items-center gap-0.5">
                                <button
                                    className="quantity-btn w-7 h-7 text-sm flex items-center justify-center disabled:opacity-40"
                                >
                                    −
                                </button>
                                <span className="w-10 h-7 flex items-center justify-center bg-[rgba(0,0,0,0.15)] text-[#3c1e16] text-sm font-bold">
                                    1
                                </span>
                                <button
                                    className="quantity-btn w-7 h-7 text-sm flex items-center justify-center disabled:opacity-40">
                                    +
                                </button>
                            </div>
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#5a3825]">
                            25 DR / Stk.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};