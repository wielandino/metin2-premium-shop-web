import type { ShopItem } from '../../../api/types/ShopItem';
import { Button } from '../Button/Button';
import { ItemHighlights } from './ItemHighlights';
import { useLocalizedItem } from '../../../customHooks/useLocalizeHook';

type ItemCardProps = {
  item: ShopItem;
  isCarousel: boolean;
  onItemClick: (item: ShopItem) => void;
  onAddToCart: () => void;
};

export const ItemCard = ({ item, isCarousel, onItemClick, onAddToCart }: ItemCardProps) => {

  const itemLocalization = useLocalizedItem(item);

  return (
    <div
      className={`shadow-[0_1px_2px_#000] p-2 sm:p-2.5 item-card
        ${isCarousel ? 'keen-slider__slide min-h-45 sm:min-h-47.5 md:min-h-50' : 'w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.875rem)] lg:w-66.75 mb-3 sm:mb-4 md:mb-5'}`}>

      <h4 className="mt-0.5 mb-1 sm:mb-1.5 pt-0.5 text-[1.4em] leading-tight">
        <a className="text-[#662d12] cursor-pointer hover:underline"
          onClick={() => onItemClick(item)}>{itemLocalization.name}</a>
      </h4>

      <div className="flex text-[0.85em] mb-1 sm:mb-1.5 min-h-22.5 sm:min-h-25 md:min-h-27.5 bg-[rgba(0,0,0,0.2)]">
        <a onClick={() => onItemClick(item)} className="cursor-pointer shrink-0">
          <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24.5 md:h-24.5">
            <img src={"/images/items/" + item.imageName + ".png"} className="w-full h-full object-contain" />
          </div>
        </a>

        <div className="pt-1 sm:pt-1.5 md:pt-2 pl-1.5 sm:pl-2 flex-1 flex flex-col">
          <ItemHighlights features={itemLocalization.features} />
        </div>
      </div>

      <div className="w-full sm:w-auto sm:max-w-30 md:w-27.75 sm:float-right">
        <Button
          title={` ${item.price.toString()} DR`}
          iconId="shopping-cart"
          className="base-green-btn w-full text-sm h-5 text-[12px]!"
          onClick={onAddToCart}
        />
      </div>
    </div>
  );
};
