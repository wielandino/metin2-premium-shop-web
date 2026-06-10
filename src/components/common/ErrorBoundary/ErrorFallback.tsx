import { useTranslation } from "react-i18next";
import { Icon } from "../Icon";

interface ErrorFallbackProps {
    error: Error | null;
    onReset: () => void;
}

export const ErrorFallback = ({ onReset }: ErrorFallbackProps) => {
    const { t } = useTranslation();

    return (
        <div className="metin-container page-image mx-auto flex items-center justify-center bg-none!" >
            <div className="text-center px-4 sm:px-6 py-12 sm:py-16 max-w-md">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[rgba(0,0,0,0.3)] border-2 border-tequila/40 flex items-center justify-center mx-auto mb-5">
                    <Icon icon="triangle-exclamation" className="text-4xl sm:text-5xl text-tequila" />
                </div>

                <h2
                    className="text-[#f2e69f] text-xl sm:text-2xl mb-2"
                    style={{
                        fontFamily: '"Droid Serif", georgia, "Times New Roman", serif',
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                    }}
                >
                    {t("error.somethingWentWrong")}
                </h2>

                <p className="text-[#eade9e] text-sm sm:text-base mb-6">
                    {t("error.somethingWentWrongDescription")}
                </p>

                <button
                    onClick={onReset}
                    className="base-green-btn px-8 py-2 flex items-center justify-center gap-2 mx-auto h-5">
                    <Icon icon="home" className="mr-1" />
                    {t("error.backToShop")}
                </button>
            </div>
        </div>
    );
};
