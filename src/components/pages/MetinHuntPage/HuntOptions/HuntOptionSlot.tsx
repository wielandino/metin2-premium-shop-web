import { Button } from "../../../common/Button/Button"

export const HuntOptionSlot = () => {


    return (
        <>
            <div className="flex items-center bg-(--transparent-box-bg-color-secondary) border border-solid border-[#3A2010] pt-2.5 pb-2.5 pl-3 pr-3 gap-2.5 mb-1.5">
                <span className="text-[#555555] text-[11px] min-w-4">1.</span>
                <span className="text-[#555555] text-[12px] flex-1">- Leerer Slot -</span>

                <Button title="+ Adder" className="pt-1 pb-1 pl-2 pr-2 border border-solid border-[#27AE60] bg-[rgba(0, 0, 0, 0.2)] text-[#555555] text-[11px] items-center gap-1" />
            </div>
        </>
    )
}