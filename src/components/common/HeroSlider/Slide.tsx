import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SlideProps {
  imageUrl: string;
  redirectUrl?: string;
  duration?: number;
  alt?: string;
  children?: ReactNode;
}

export const Slide = ({ imageUrl, redirectUrl, alt, children }: SlideProps) => {
  return (
    <div className="relative w-full h-full">
      <Link to={redirectUrl ?? ''}>
        <img src={imageUrl}
          alt={alt || 'Slide'}
          className="w-full h-full object-cover" />
      </Link>

      {children && (
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {children}
        </div>
      )}
    </div>
  );
};