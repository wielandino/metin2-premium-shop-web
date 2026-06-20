import { useKeenSlider } from "keen-slider/react";

export function useCarousel() {
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

  return { ref, instanceRef };
}
