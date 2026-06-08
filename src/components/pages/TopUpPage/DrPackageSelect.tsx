import { useTranslation } from "react-i18next";

type DrPackage = {
    id: string;
    drAmount: number;
    price: string;
    bonus: number;
    popular?: boolean;
};

const drPackages: DrPackage[] = [
    { id: "dr-500", drAmount: 500, price: "4,99 €", bonus: 0 },
    { id: "dr-1100", drAmount: 1100, price: "9,99 €", bonus: 100, popular: true },
    { id: "dr-2500", drAmount: 2500, price: "19,99 €", bonus: 300 },
    { id: "dr-5500", drAmount: 5500, price: "39,99 €", bonus: 700 },
    { id: "dr-12000", drAmount: 12000, price: "79,99 €", bonus: 2000 },
    { id: "dr-25000", drAmount: 25000, price: "149,99 €", bonus: 5000 },
];

type DrPackageSelectProps = {
    selected: string;
    onSelect: (id: string) => void;
};

export const DrPackageSelect = ({ selected, onSelect }: DrPackageSelectProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <h3 className="text-[#f2e69f] text-base sm:text-lg mb-3">
                {t('topUp.selectPackage')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {drPackages.map((pkg) => (
                    <button
                        key={pkg.id}
                        onClick={() => onSelect(pkg.id)}
                        className={`relative flex flex-col items-center p-3 sm:p-4 rounded-sm border-2 transition-all cursor-pointer text-center ${
                            selected === pkg.id
                                ? "border-tequila bg-[rgba(232,163,20,0.15)]"
                                : "border-[rgba(242,230,159,0.2)] bg-[rgba(0,0,0,0.25)] hover:border-[rgba(242,230,159,0.4)]"
                        }`}
                    >
                        {pkg.popular && (
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-tequila text-[#3c1e16] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                {t('topUp.popular')}
                            </span>
                        )}
                        <span className="text-[#f2e69f] text-xl sm:text-2xl font-bold">
                            {pkg.drAmount.toLocaleString()} DR
                        </span>
                        <span className="text-[#eade9e] text-sm sm:text-base mt-1">
                            {pkg.price}
                        </span>
                        {pkg.bonus > 0 && (
                            <span className="text-tequila text-xs mt-1 font-medium">
                                {t('topUp.bonus', { bonus: pkg.bonus })}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
