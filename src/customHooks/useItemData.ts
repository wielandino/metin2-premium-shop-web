import { useSuspenseQuery } from "@tanstack/react-query"
import { getShopItems } from "../api/services/itemService"

export const useItemData = () => {
    const { data: shopItems } = useSuspenseQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const result = await getShopItems()
            if (!result.success) throw new Error(result.error)
            return result.data
        }
    })

    return { shopItems }
}
