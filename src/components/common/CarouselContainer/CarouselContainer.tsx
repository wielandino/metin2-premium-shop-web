import type { ReactNode } from "react";
import "keen-slider/keen-slider.min.css";
import { useCarousel } from "../../../customHooks/useCarousel";

type CarouselContainerProps = {
  children: ReactNode;
  className?: string;
};

export const CarouselContainer = ({ children, className }: CarouselContainerProps) => {
  const { ref, instanceRef } = useCarousel();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div ref={ref} className="keen-slider">
        {children}
      </div>

      <div
        onClick={() => instanceRef.current?.prev()}
        className="heroslider-arrow-btn heroslider-arrow-left absolute -left-2.5"
      >
        <div className="heroslider-arrow-inc" />
      </div>

      <div
        onClick={() => instanceRef.current?.next()}
        className="heroslider-arrow-btn heroslider-arrow-right absolute -right-2.5!"
      >
        <div className="heroslider-arrow-inc" />
      </div>
    </div>
  );
};
