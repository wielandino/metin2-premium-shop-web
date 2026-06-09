import type { Category } from "./Category";
import type { Item } from "./Item";

export interface ShopItem extends Item {
    category?: Category,
    price: number,
    maxQuantity: number,
    quantityPackageSplit: number,
    isNew: boolean,
    isHot: boolean
}