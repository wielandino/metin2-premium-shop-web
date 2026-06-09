import { QuantitySelection } from "./QuantitySelection";
import { Button } from "../../common/Button/Button";
import type { ShopItem } from "../../../api/types/ShopItem";
import { useTranslation } from "react-i18next";

type ItemPurchaseFooterProps = {
  shopItem: ShopItem;
  selectedQuantity: number;
  setSelectedQuantity: (quantity: number) => void;
  totalPrice: number;
  onAddToCart?: () => void;
};

export const ItemPurchaseFooter = ({
  shopItem,
  selectedQuantity,
  setSelectedQuantity,
  totalPrice,
  onAddToCart,
}: ItemPurchaseFooterProps) => {

  const { t } = useTranslation();

  return (
    <div className="mt-1 p-3 sm:p-4 md:p-5 shadow-[0px_1px_2px_#000] bg-[#eade9e]">
      <div className="contrast-box grey-box">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="sm:col-span-1 md:col-span-2">
            <QuantitySelection
              maxQuantity={shopItem.maxQuantity}
              quantityPackageSplit={shopItem.quantityPackageSplit}
              selectedQuantity={selectedQuantity}
              setSelectedQuantity={setSelectedQuantity}
            />
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm mb-1">{t('common.availableFor')}:</p>
            <p className="text-2xl sm:text-3xl font-bold text-[#5a3825] mb-2">{totalPrice} DR</p>
            <Button
              title={t('common.addItem')}
              iconId="shopping-cart"
              className="base-green-btn h-5 text-[14px]! w-[70%]"
              onClick={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
