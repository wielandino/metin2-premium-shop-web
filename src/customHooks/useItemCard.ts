import { useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react";
import type { ShopItem } from '../api/types/ShopItem';
import { useCartContext } from '../context/CartContext/CartContext';

export function useItemCard(isCarousel: boolean, onItemClickProp?: (item: ShopItem) => void) {
  const cartContext = useCartContext();

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.2, spacing: 10 },
    loop: true,
    drag: true,
    breakpoints: {
      '(min-width: 480px)': { slides: { perView: 1.5, spacing: 15 } },
      '(min-width: 640px)': { slides: { perView: 2.2, spacing: 15 } },
      '(min-width: 768px)': { slides: { perView: 2.5, spacing: 20 } },
      '(min-width: 1024px)': { slides: { perView: 3.5, spacing: 25 } },
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
    if (isCarousel && instanceRef.current) instanceRef.current.update();
  }, [isCarousel, instanceRef]);

  return {
    ref,
    instanceRef,
    isModalOpen,
    selectedItem,
    onItemClick,
    handleCloseModal,
    addToCart: (item: ShopItem) => cartContext.addItem(item, 1),
  };
}