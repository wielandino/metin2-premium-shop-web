// components/ItemCarousel/ItemCarousel.tsx
import type { ShopItem } from '../../../models/ShopItem';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface ItemCarouselProps {
  items: ShopItem[];
  onItemClick?: (item: ShopItem) => void;
  onBuyClick?: (item: ShopItem, quantity: number) => void;
}

export const ItemCarousel = ({ 
  items, 
  onItemClick,
  onBuyClick 
}: ItemCarouselProps) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3.5,
      spacing: 15,
    },
    loop: true
  })

  
  return (
    <>
      <div ref={ref} className="keen-slider">
        {items.map((item) => (
          <div key={item.id} className="keen-slider__slide bg-red-500">{item.item.name}</div>
        ))}
      </div>
    </>
  );
};