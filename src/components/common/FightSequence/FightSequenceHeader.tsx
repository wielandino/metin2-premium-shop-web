import type { ElementThemeUIMap } from "../../../utils/UIHelper";
import { Icon } from "../Icon"
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type FightSequenceHeaderProps = {
    elementTheme: ElementThemeUIMap[string];
    enemyName: string;
}

export const FightSequenceHeader = ({ elementTheme, enemyName }: FightSequenceHeaderProps) => {
    return (
        <div className="flex items-center gap-2.5 border-b border-b-solid"
            style={{
                background: elementTheme.backgroundColor,
                padding: '12px 16px',
                borderBottomColor: elementTheme.darkColor
            }}>
            <span style={{ color: elementTheme.darkColor }}>
                <Icon icon={elementTheme.icon as IconProp} className="text-[20px]" />
            </span>
            <span className="text-[#f2e69f] text-[16px] flex-1">
                Kampf gegen {enemyName}
            </span>
        </div>
    )

}