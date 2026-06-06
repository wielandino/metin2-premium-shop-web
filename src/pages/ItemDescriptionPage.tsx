import { useState } from "react";
import type { ShopItem } from "../api/types/ShopItem"
import { ItemDescriptionHeader } from "../components/pages/ItemDescriptionPage/ItemDescriptionHeader";
import { ItemImage } from "../components/pages/ItemDescriptionPage/ItemImage";
import { ItemInfo } from "../components/pages/ItemDescriptionPage/ItemInfo";
import { ItemPurchaseFooter } from "../components/pages/ItemDescriptionPage/ItemPurchaseFooter";

type ItemDescriptionPageProps = { shopItem: ShopItem, isInModal?: boolean; }

export const ItemDescriptionPage = ({ shopItem, isInModal = true }: ItemDescriptionPageProps) => {

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const totalPrice = shopItem.price * selectedQuantity;

  return (
    <div className={`
      ${isInModal ? 'bg-[rgba(0,0,0,0.3)]' : 'max-w-2xl mx-auto'}
    `}>

      <div className="mt-3 sm:mt-4 md:mt-5 p-3 sm:p-4 md:p-5 bg-[#eade9e]">
        <ItemDescriptionHeader
          name={shopItem.name}
          totalPrice={totalPrice}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-5">
          <ItemImage
            imageName={shopItem.imageName}
            alt={shopItem.name}
          />
          <ItemInfo
            features={shopItem.features}
            description={shopItem.description}
          />
        </div>
      </div>

      <ItemPurchaseFooter
        shopItem={shopItem}
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
        totalPrice={totalPrice}
      />
    </div>
  );
}
