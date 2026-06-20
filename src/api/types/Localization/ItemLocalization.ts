import type { EntityLocalizationDetails } from "./EntityLocalization";

export interface ItemLocalizationDetails extends EntityLocalizationDetails {
    description: string;
    features: string[];
}

