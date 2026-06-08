import { useState } from "react";
import { MainContainer } from "../components/common/MainContainer";
import { Icon } from "../components/common/Icon";
import { PaymentMethodSelect } from "../components/pages/TopUpPage/PaymentMethodSelect";
import { DrPackageSelect } from "../components/pages/TopUpPage/DrPackageSelect";
import { useTranslation } from "react-i18next";

export const TopUpPage = () => {
    const [selectedPayment, setSelectedPayment] = useState("");
    const [selectedPackage, setSelectedPackage] = useState("");

    const { t } = useTranslation()

    return (
        <MainContainer activeTabId="home" pageHeaderName={t('common.topUp')}>
            <div className="flex flex-col gap-5 sm:gap-6 max-w-2xl">
                <PaymentMethodSelect
                    selected={selectedPayment}
                    onSelect={setSelectedPayment}
                />

                <DrPackageSelect
                    selected={selectedPackage}
                    onSelect={setSelectedPackage}
                />

                <div className="flex">
                    <button
                        disabled={!selectedPayment || !selectedPackage}
                        className={`base-green-btn px-8 py-2 sm:py-2.5 text-sm sm:text-base w-full justify-center lg:w-auto flex items-center gap-2 h-5 ${
                            !selectedPayment || !selectedPackage
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}>
                        <Icon icon="coins" />
                        {t('topUp.chargeNow')}
                    </button>
                </div>
            </div>
        </MainContainer>
    );
};
