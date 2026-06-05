export const ClearAllCardItemsConfirm = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <div className="relative bg-[#eade9e] shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-6 sm:p-8 max-w-sm w-full animate-modal-in">
                <h3 className="text-[#5a3825] text-lg font-bold mb-3">
                    Warenkorb leeren?
                </h3>
                <p className="text-[#5a3825]/80 text-sm mb-6">
                    Möchtest du wirklich alle 1 Artikel aus deinem Warenkorb entfernen?
                </p>
                <div className="flex gap-3 justify-end">
                    <button
                        className="quantity-btn px-4 py-1.5 text-sm"
                    >
                        Abbrechen
                    </button>
                    <button
                        className="base-green-btn px-4 py-1.5 text-sm !bg-red-700 !border-red-800"
                    >
                        Leeren
                    </button>
                </div>
            </div>
        </div>
    );
};