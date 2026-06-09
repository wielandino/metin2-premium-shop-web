import { useContext, useEffect, useState } from 'react';
import type { ShopItem } from '../../../api/types/ShopItem';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Modal } from '../Modal/Modal';
import { ItemDescriptionPage } from '../../../pages/ItemDescriptionPage';
import { CartContext } from '../../../context/CartContext/CartContext';
import { ItemCardItem } from './ItemCardItem';

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

  const cartContext = useContext(CartContext)

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
            <ItemCardItem
              key={item.id}
              item={item}
              isCarousel={isCarousel}
              onItemClick={onItemClick}
              onAddToCart={() => cartContext?.addItem(item, 1)}
            />
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
