import type { ItemLocalizationDetails, LocalizationLanguage } from "./ItemLocalization"

export interface Item {
    id: number,
    imageName: string
    itemDetails: Record<LocalizationLanguage, ItemLocalizationDetails>
}