import type { ElementTheme } from "../../../utils/UIHelper";
import { Icon } from "../Icon"
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type FightSequenceHeaderProps = {
    elementTheme: ElementTheme;
    enemyName: string;
}

export const FightSequenceHeader = ({ elementTheme, enemyName }: FightSequenceHeaderProps) => {
    return (
        <div className="flex items-center gap-2.5 border-b border-b-solid"
            style={{
                background: elementTheme.palette.background,
                padding: '12px 16px',
                borderBottomColor: elementTheme.palette.dark
            }}>
            <span style={{ color: elementTheme.palette.dark }}>
                <Icon icon={elementTheme.icon as IconProp} className="text-[20px]" />
            </span>
            <span className="text-[#f2e69f] text-[16px] flex-1">
                Kampf gegen {enemyName}
            </span>
        </div>
    )

}