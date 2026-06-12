import type { LocalizationLanguage } from "./Localization/LocalizationLanguage";
import type { TombolaLocalizationDetails } from "./Localization/TombolaLocalization";
import type { TombolaItem } from "./Tombola/TombolaItem"

export type TombolaTier = {
    id: number,
    tombolaDetails: Record<LocalizationLanguage, TombolaLocalizationDetails>
    tierLevel: string;
    tierCost: number,
    tombolaItems: TombolaItem[]
}