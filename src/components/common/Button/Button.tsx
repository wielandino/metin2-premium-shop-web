import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon";

type ButtonProps = {title: string, onClick?: () => void, className: string, iconId?: string | null}; 

export const Button = ( {title, onClick, className, iconId}: ButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={className}>
                {iconId != null && <Icon icon={iconId as IconProp} className="mr-1" />}
                
                {title}
            </button>
        </>
    )
}