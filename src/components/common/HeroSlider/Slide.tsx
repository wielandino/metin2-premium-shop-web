import type { ReactNode } from "react";

interface SlideProps {
  imageUrl: string;
  redirectUrl?: string;
  duration?: number;
  alt?: string;
  children?: ReactNode;
}

export const Slide = ({ imageUrl, redirectUrl, alt, children }: SlideProps) => {
  const handleClick = () => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  };
  
  return (
    <div className="relative w-full h-full">
      <img src={imageUrl}
           alt={alt || 'Slide'}
           className={`w-full h-full object-cover
                     ${redirectUrl ? 'cursor-pointer md:hover:scale-105 transition-transform duration-300 active:scale-95' : ''}`}
           onClick={handleClick} />

      {children && (
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};