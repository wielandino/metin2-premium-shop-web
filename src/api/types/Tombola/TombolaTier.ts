import type { EntityLocalizationDetails } from "../Localization/EntityLocalization";
import type { LocalizationLanguage } from "../Localization/LocalizationLanguage";
import type { TombolaItem } from "./TombolaItem"
import type { TombolaTierSettings } from "./TombolaTierSettings";

export type TombolaTier = {
    id: number,
    tierLevel: string;
    
    tombolaLocalizationDetails: Record<LocalizationLanguage, EntityLocalizationDetails>
    tombolaTierSettings: TombolaTierSettings
    tombolaItems?: TombolaItem[]
}