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
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };
  
  return (
    <div className="relative w-full h-48 md:h-72 lg:h-96 overflow-hidden shadow-[0px_2px_6px_#662d12] rounded">
      
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
          <button onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2
                           bg-[#711A0F] hover:bg-[#8c1919]
                           text-white px-3 py-6
                             shadow-[2px_2px_0px_rgba(0,0,0,0.3)]
                             transition-all z-10 font-bold text-2xl">
            ‹
          </button>
          
          <button onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2
                     bg-[#711A0F] hover:bg-[#8c1919]
                     text-white px-3 py-6
                       shadow-[2px_2px_0px_rgba(0,0,0,0.3)]
                       transition-all z-10 font-bold text-2xl">
            ›
          </button>
        </>
      )}
    </div>
  );
};