import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon";

type ButtonProps = {title?: string, onClick?: () => void, className: string, iconId?: string | null, style?: React.CSSProperties}; 

export const Button = ( {title, onClick, className, iconId, style}: ButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={className} style={style}>
                {iconId != null && <Icon icon={iconId as IconProp} className="mr-1" />}
                
                {title}
            </button>
        </>
    )
}