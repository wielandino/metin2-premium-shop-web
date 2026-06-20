import { useState } from 'react';
import type { ShopItem } from '../../../api/types/ShopItem';
import { useCartContext } from '../../../context/CartContext/CartContext';

export function useItemCardList(onItemClickProp?: (item: ShopItem) => void) {
  const cartContext = useCartContext();

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

  return {
    isModalOpen,
    selectedItem,
    onItemClick,
    handleCloseModal,
    addToCart: (item: ShopItem) => cartContext.addItem(item, 1),
  };
}
