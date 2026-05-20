import { Icon } from "../../common/Icon"

export const AdderBtn = () => {
    return (
        <div className="border border-solid border-[#27ae60] pt-2 pb-2 text-center flex flex-col items-center">
            <Icon icon="flask"  className="text-[18px] text-[#27ae60] p-2" />
            <span className="text-[#f2e69f] text-[15px] font-bold mt-0.5 mb-0.5 ">0</span>
            <span className="text-[#888888] text-[11px]">Bonus-Adder</span>
            <span className="text-[#555555] text-[10px] mt-0.5">50% Erfolg</span>
        </div>
    )
}