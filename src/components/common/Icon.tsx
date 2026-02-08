import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconProp;
  size?: SizeProp;
  className?: string;
  ariaLabel?: string;
  decorative?: boolean;
}

export const Icon = ({
  icon,
  size,
  className = '',
  ariaLabel,
  decorative = true
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={decorative}
    />
  );
};
