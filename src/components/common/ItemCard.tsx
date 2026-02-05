import type { ShopItem } from '../../models/ShopItem';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { BuyButton } from './BuyButton';
import type { Category } from '../../models/Category';
import { mockShopItems } from '../../testing/ShopItemMocking';

interface ItemCardProps {
  onItemClick?: (item: ShopItem) => void;
  onBuyClick?: (item: ShopItem, quantity: number) => void;
  itemsFromCategory?: Category;
  onlyNew?: boolean;
  onlyHot?: boolean;
  isCarousel?: boolean
}

export const ItemCard = ({onItemClick, onBuyClick, itemsFromCategory, onlyNew, onlyHot, isCarousel = false}: ItemCardProps) => {

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.5,
      spacing: 25,
    },
    loop: true,
    drag: false
  })
  
  const items = mockShopItems.filter(item => {
    const categoryMatch = itemsFromCategory ? item.category!.id === itemsFromCategory.id : true;
    const newMatch = onlyNew ? item.isNew === true : true;
    const hotMatch = onlyHot ? item.isHot === true : true;

    return categoryMatch && newMatch && hotMatch;
  });

  return (
    <>
      <div ref={ref} className={isCarousel ? `keen-slider` : 'flex flex-row flex-wrap'}>
        {items.map((item) => (
          <div key={item.id} 
               className={`h-47 shadow-[0_1px_2px_#000] pt-2 pr-2.5 pb-2 pl-2.5 item-card
                           ${isCarousel ? 'keen-slider__slide' : 'mr-5 mb-5 w-66.75'}`}>

            <h4 className="mt-0.5 mb-1.5 pt-0.5 text-[16px]">
              <a className="text-[#662d12]"
                onClick={() => onItemClick && onItemClick(item)}>{item.name}</a>
            </h4>

            <div className="flex text-[0.85em] mb-1.5 h-24.5 bg-[rgba(0,0,0,0.2)]">
              <a onClick={() => onItemClick && onItemClick(item)} className="max-w-24.5 max-h-24.5">
                <div className="w-24.5 h-24.5">
                  <img src={"/images/items/" + item.imageName + ".png"} />
                </div>
              </a>

              <div className="pt-2">
                <img src="/images/star.png"
                  width="15"
                  height="15"
                  className="inline-block mr-1" />
                <p className="inline-block text-[#662d12]">Highlights</p>
                <div className="h-20 overflow-hidden text-[11px] leading-[1.2]">
                  <ul className="list-none p-0 m-0 line-clamp-4">
                    {item.features.map((feature, index) => (
                      <li key={index}>
                        • {feature}{" "}
                      </li>
                    ))}
                  </ul>

                </div>
                <div className="w-27.75 float-right">
                  <BuyButton shopItem={item} title={item.price.toString()} />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};