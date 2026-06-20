import type { ShopItem } from '../../../api/types/ShopItem';
import { Modal } from '../Modal/Modal';
import { ItemDescriptionPage } from '../../../pages/ItemDescriptionPage';
import { ItemCard } from './ItemCard';
import { useItemCardList } from './useItemCardList';
import { CarouselContainer } from '../CarouselContainer/CarouselContainer';

interface ItemCardListProps {
  items: ShopItem[];
  onItemClick?: (item: ShopItem) => void;
  isCarousel?: boolean;
}

export const ItemCardList = ({ items, onItemClick: onItemClickProp, isCarousel = false }: ItemCardListProps) => {

  const { isModalOpen, selectedItem, onItemClick, handleCloseModal, addToCart }
    = useItemCardList(onItemClickProp);

  const itemCards = items.map((item) => (
    <ItemCard
      key={item.id}
      item={item}
      isCarousel={isCarousel}
      onItemClick={onItemClick}
      onAddToCart={() => addToCart(item)}
    />
  ));

  return (
    <>
      {isCarousel ? (
        <CarouselContainer>
          {itemCards}
        </CarouselContainer>
      ) : (
        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-5">
          {itemCards}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} showCloseModalBtn={true}>
        {selectedItem && (
          <ItemDescriptionPage shopItem={selectedItem} />
        )}
      </Modal>
    </>
  );
};
