import { useTranslation } from "react-i18next";
import type { Item } from "../api/types/Item";
import type { LocalizationLanguage } from "../api/types/Localization/LocalizationLanguage";
import type { TombolaTier } from "../api/types/TombolaTier";

export const useLocalizedItem = (item: Item) => {
    const { i18n } = useTranslation();
    return item.itemDetails[(i18n.language ?? 'en') as LocalizationLanguage];
}

export const useLocalizedTombolaTier = (tombolaTier: TombolaTier) => {
    const { i18n } = useTranslation();
    return tombolaTier.tombolaDetails[(i18n.language ?? 'en') as LocalizationLanguage];
}