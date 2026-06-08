import { useTranslation } from "react-i18next";
import { Icon } from "../../common/Icon";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type PaymentMethod = {
    id: string;
    name: string;
    icon: IconProp;
};

const paymentMethods: PaymentMethod[] = [
    { id: "paypal", name: "PayPal", icon: "money-bill-wave" },
    { id: "paysafecard", name: "Paysafecard", icon: "ticket" },
    { id: "creditcard", name: "Kreditkarte", icon: "credit-card" },
    { id: "klarna", name: "Klarna", icon: "wallet" },
];

type PaymentMethodSelectProps = {
    selected: string;
    onSelect: (id: string) => void;
};

export const PaymentMethodSelect = ({ selected, onSelect }: PaymentMethodSelectProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <h3 className="text-[#f2e69f] text-base sm:text-lg mb-3">
                {t('topUp.selectPayment')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {paymentMethods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => onSelect(method.id)}
                        className={`flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-sm border-2 transition-all cursor-pointer ${
                            selected === method.id
                                ? "border-tequila bg-[rgba(232,163,20,0.15)] text-[#f2e69f]"
                                : "border-[rgba(242,230,159,0.2)] bg-[rgba(0,0,0,0.25)] text-[#eade9e]/70 hover:border-[rgba(242,230,159,0.4)] hover:text-[#eade9e]"
                        }`}
                    >
                        <Icon icon={method.icon} className="text-xl sm:text-2xl" />
                        <span className="text-xs sm:text-sm font-medium">{method.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
