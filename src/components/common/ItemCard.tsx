import { useEffect, useState } from 'react';
import type { ShopItem } from '../../api/types/ShopItem';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Modal } from './Modal/Modal';
import { ItemDescriptionPage } from '../../pages/ItemDescriptionPage';
import { Button } from './Button/Button';

interface ItemCardProps {
  items: ShopItem[];
  onItemClick?: (item: ShopItem) => void;
  isCarousel?: boolean;
}

export const ItemCard = ({
  items,
  onItemClick: onItemClickProp,
  isCarousel = false
}: ItemCardProps) => {

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
      spacing: 10,
    },
    loop: true,
    drag: true,
    breakpoints: {
      '(min-width: 480px)': {
        slides: {
          perView: 1.5,
          spacing: 15,
        },
      },
      '(min-width: 640px)': {
        slides: {
          perView: 2.2,
          spacing: 15,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2.5,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3.5,
          spacing: 25,
        },
      },
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

  const handleItemModalClick = (item: ShopItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const onItemClick = onItemClickProp ?? handleItemModalClick;

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (isCarousel) instanceRef.current?.update();
  }, [items]);

  return (
    <>
      <div className={isCarousel ? 'relative' : ''}>
        <div ref={ref} className={isCarousel ? `keen-slider` : 'flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-5'}>
          {items.map((item) => (
            <div key={item.id}
              className={`shadow-[0_1px_2px_#000] p-2 sm:p-2.5 item-card
                ${isCarousel ? 'keen-slider__slide min-h-45 sm:min-h-47.5 md:min-h-50' : 'w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.875rem)] lg:w-66.75 mb-3 sm:mb-4 md:mb-5'}`}>

              <h4 className="mt-0.5 mb-1 sm:mb-1.5 pt-0.5 text-[1.4em] leading-tight">
                <a className="text-[#662d12] cursor-pointer hover:underline"
                  onClick={() => onItemClick && onItemClick(item)}>{item.name}</a>
              </h4>

              <div className="flex text-[0.85em] mb-1 sm:mb-1.5 min-h-22.5 sm:min-h-25 md:min-h-27.5 bg-[rgba(0,0,0,0.2)]">
                <a onClick={() => onItemClick && onItemClick(item)} className="cursor-pointer shrink-0">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24.5 md:h-24.5">
                    <img src={"/images/items/" + item.imageName + ".png"} className="w-full h-full object-contain" />
                  </div>
                </a>

                <div className="pt-1 sm:pt-1.5 md:pt-2 pl-1.5 sm:pl-2 flex-1 flex flex-col">
                  <div className="mb-1">
                    <img src="/images/star.png"
                      width="12"
                      height="12"
                      className="inline-block mr-0.5 sm:mr-1 w-3 h-3 sm:w-3.75 sm:h-3.75" />
                    <p className="inline-block text-[#662d12] text-[1.2em] sm:text-[11px]">Highlights</p>
                  </div>

                  <div className="flex-1 overflow-hidden text-[1.2em] sm:text-[0.8em] md:text-[11px] leading-[1.2] mb-1">
                    <ul className="list-none p-0 m-0 line-clamp-3 sm:line-clamp-4">
                      {item.features.map((feature, index) => (
                        <li key={index}>
                          • {feature}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>


                </div>
              </div>
              <div className="w-full sm:w-auto sm:max-w-30 md:w-27.75 sm:float-right">
                <Button
                  title="Hinzufügen"
                  iconId="shopping-cart"
                  className="base-green-btn w-full text-sm h-5 text-[12px]!"
                  onClick={() => console.log("Add to cart:", item.name)}
                />
              </div>
            </div>
          ))}
        </div>

        {isCarousel && (
          <>
            <div onClick={() => instanceRef.current?.prev()}
                 className="heroslider-arrow-btn heroslider-arrow-left absolute -left-2.5">
              <div className="heroslider-arrow-inc"></div>
            </div>

            <div onClick={() => instanceRef.current?.next()}
                 className="heroslider-arrow-btn heroslider-arrow-right absolute -right-2.5!">
              <div className="heroslider-arrow-inc"></div>
            </div>
          </>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} showCloseModalBtn={true}>
        {selectedItem && (
          <ItemDescriptionPage shopItem={selectedItem} />
        )}
      </Modal>
    </>
  );
};