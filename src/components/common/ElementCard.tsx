import type { ElementTheme } from "../../utils/UIHelper";
import { Icon } from "./Icon";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type ElementCardProps = {
    element: ElementTheme;
    children: React.ReactNode;
}

export const ElementCard = ({ element, children }: ElementCardProps) => {
    return (
        <div
            className="border border-solid p-4 flex flex-col gap-3"
            style={{
                borderColor: element.palette.dark,
                background: element.palette.background,
            }}
        >
            <div className="flex items-center gap-2">
                <span style={{ color: element.palette.dark }}>
                    <Icon icon={element.icon as IconProp} className="text-[22px]" />
                </span>
            </div>
            {children}
        </div>
    );
}