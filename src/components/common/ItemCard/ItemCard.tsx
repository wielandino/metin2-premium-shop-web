import type { ShopItem } from '../../../api/types/ShopItem';
import "keen-slider/keen-slider.min.css"
import { Modal } from '../Modal/Modal';
import { ItemDescriptionPage } from '../../../pages/ItemDescriptionPage';
import { ItemCardItem } from './ItemCardItem';
import { useItemCard } from '../../../customHooks/useItemCard';

interface ItemCardProps {
  items: ShopItem[];
  onItemClick?: (item: ShopItem) => void;
  isCarousel?: boolean;
}

export const ItemCard = ({ items, onItemClick: onItemClickProp, isCarousel = false }: ItemCardProps) => {
  
  const { ref, instanceRef, isModalOpen, selectedItem, onItemClick, handleCloseModal, addToCart }
    = useItemCard(isCarousel, onItemClickProp);

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
              onAddToCart={() => addToCart(item)}
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
