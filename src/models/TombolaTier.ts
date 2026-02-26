import type { TombolaItem } from "./TombolaItem"

export interface TombolaTier {
    id: number,
    tierName: string,
    tierCost: number,
    tierDescription: string,
    tombolaItems: TombolaItem[],
    customCss?: string
}