import { useEffect, useState, type ReactNode } from "react";

export function useHeroSlider(children: ReactNode, autoPlay: boolean, interval: number) {
    const slides = Array.isArray(children) ? children : [children];
    const slideCount = slides.length;

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!autoPlay || slideCount <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideCount);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slideCount]);

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slideCount);
    };

    return { slides, slideCount, currentSlide, goToPrevious, goToNext };
}
