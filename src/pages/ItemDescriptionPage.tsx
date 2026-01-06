import type { Item } from "../models/Item"

type ItemDescriptionPageProps = { item: Item }

export const ItemDescriptionPage = ({ item }: ItemDescriptionPageProps) => {
  return (
    <>
      {item.name}
    </>
  )
}