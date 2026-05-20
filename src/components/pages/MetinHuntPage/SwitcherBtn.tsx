import { Icon } from "../../common/Icon"

export const SwitcherBtn = () => {
    return (
        <div className="border border-solid border-[#8b5e3c] pt-2 pb-2 text-center flex flex-col items-center">
            <Icon icon="shuffle"  className="text-[18px] text-[#8b5e3c] p-2" />
            <span className="text-[#f2e69f] text-[15px] font-bold mt-0.5 mb-0.5 ">0</span>
            <span className="text-[#888888] text-[11px]">Bonus-Switcher</span>
            <span className="text-[#555555] text-[10px] mt-0.5">Immer erfolgreich</span>
        </div>
    )
}