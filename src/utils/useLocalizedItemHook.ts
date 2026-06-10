import { useTranslation } from "react-i18next";
import type { Item } from "../api/types/Item";
import type { LocalizationLanguage } from "../api/types/ItemLocalization";

export const useLocalizedItem = (item: Item) => {
    const { i18n } = useTranslation();
    return item.itemDetails[i18n.language as LocalizationLanguage ?? 'en'];
}