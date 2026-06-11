import type { ReactNode } from "react";
import { useHeroSlider } from "../../../customHooks/useHeroSlider";

interface HeroSliderProps {
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  children: ReactNode;
}

export const HeroSlider = ({
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  children
}: HeroSliderProps) => {
  const { slides, slideCount, currentSlide, goToPrevious, goToNext } = useHeroSlider(children, autoPlay, interval);
  
  return (
    <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-67.5 overflow-hidden">

      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div key={index}
               className={`absolute inset-0 transition-opacity duration-1000
               ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            {slide}
          </div>
        ))}
      </div>

      {showArrows && slideCount > 1 && (
        <>
          <div onClick={goToPrevious}
               className="heroslider-arrow-btn heroslider-arrow-left hidden sm:block">
                  <div className="heroslider-arrow-inc"></div>

          </div>

          <div onClick={goToNext}
               className="heroslider-arrow-btn heroslider-arrow-right hidden sm:block">
                  <div className="heroslider-arrow-inc"></div>
          </div>
        </>
      )}
    </div>
  );
};