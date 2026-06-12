import type { TombolaItem } from "./Tombola/TombolaItem"

export type TombolaTier = {
    id: number,
    tierName: string,
    tierCost: number,
    tierDescription: string,
    tombolaItems: TombolaItem[]
    tierLevel: string;
}