import { Icon } from "../../../common/Icon";

type HuntOptionSlotDescriptionProps = {
    title: string;
    description: string;
}

export const HuntOptionSlotDescription = ({ title, description }: HuntOptionSlotDescriptionProps) => {

    return (
        <div className="flex-1">
            <p className="text-[#f2e69f] text-[14px] mb-0.5">{title}</p>
            <p className="text-[#999999] text-[11px] mb-2">{description}</p>

            <div className="flex gap-1.5 flex-wrap mb-2">
                <span className="flex text-[11px] text-[#555555] border border-solid border-[#3a2010] bg-[#00000033] items-center gap-1 pt-0.5 pb-0.5 pl-2 pr-2">
                    <Icon icon="fire" />
                    Feuer 70%
                </span>
            </div>
        </div>
    )
}
