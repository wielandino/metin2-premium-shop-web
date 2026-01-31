import { useEffect, useState, type ReactNode } from "react";

interface HeroSliderProps {
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  children: ReactNode;
}

export const HeroSlider = ({ 
  autoPlay = true, 
  interval = 5000,
  showArrows = true,
  children 
}: HeroSliderProps) => {
  
  const slides = Array.isArray(children) ? children : [children];
  const slideCount = slides.length;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    if (!autoPlay || slideCount <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, slideCount, currentSlide]);
  
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };
  
  return (
    <div className="relative w-full h-67.5 overflow-hidden">
      
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
               className="heroslider-arrow-btn heroslider-arrow-left">
                  <div className="heroslider-arrow-inc"></div>
            
          </div>
          
          <div onClick={goToNext}
               className="heroslider-arrow-btn heroslider-arrow-right">
                  <div className="heroslider-arrow-inc"></div>
          </div>
        </>
      )}
    </div>
  );
};