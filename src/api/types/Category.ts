import type { EntityLocalizationDetails } from "./Localization/EntityLocalization";
import type { LocalizationLanguage } from "./Localization/LocalizationLanguage";

export type Category = {
    id: number;
    iconName?: string;
    parentCategory?: Category
    categoryLocalizationDetails: Record<LocalizationLanguage, EntityLocalizationDetails>
}

export type CategoryWithSubs = {
    parentCategory: Category
    subCategories: Category[]
}