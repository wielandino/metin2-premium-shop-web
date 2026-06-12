import type { ItemLocalizationDetails } from "./Localization/ItemLocalization"
import type { LocalizationLanguage } from "./Localization/LocalizationLanguage"

export interface Item {
    id: number,
    imageName: string
    itemDetails: Record<LocalizationLanguage, ItemLocalizationDetails>
}