import type { TombolaItem } from "./TombolaItem"

export interface TombolaTier {
    tierName: string,
    tierCost: Number,
    tierDescription: string,
    tombolaItems: TombolaItem[]
}