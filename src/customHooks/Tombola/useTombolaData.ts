import { useSuspenseQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getTombolaTierItems, getTombolaTiers } from "../../api/services/tombolaService"

export const useTombolaData = () => {
    const { data: tiers } = useSuspenseQuery({
        queryKey: ['tombola'],
        queryFn: async () => {
            const result = await getTombolaTiers()
            if (!result.success) throw new Error(result.error)
            return result.data
        }
    })

    const [selectedTier, setSelectedTier] = useState(tiers[0])

    const { data: tierItems } = useSuspenseQuery({
        queryKey: ['tombola', selectedTier.tierLevel, 'items'],
        queryFn: async () => {
            const result = await getTombolaTierItems(selectedTier.tierLevel)
            if (!result.success) throw new Error(result.error)
            return result.data
        }
    })

    return { tiers, tierItems, selectedTier, setSelectedTier }
}
