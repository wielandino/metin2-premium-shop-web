import type { LocalizationLanguage } from "../Localization/LocalizationLanguage";
import type { TombolaLocalizationDetails } from "../Localization/TombolaLocalization";
import type { TombolaItem } from "./TombolaItem"
import type { TombolaTierSettings } from "./TombolaTierSettings";

export type TombolaTier = {
    id: number,
    tierLevel: string;
    
    tombolaLocalizationDetails: Record<LocalizationLanguage, TombolaLocalizationDetails>
    tombolaTierSettings: TombolaTierSettings
    tombolaItems?: TombolaItem[]
}