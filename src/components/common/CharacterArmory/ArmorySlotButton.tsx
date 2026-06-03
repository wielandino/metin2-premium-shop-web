import type { ArmoryType } from "../../../api/types/Types/ArmoryType";
import { armoryThemes } from "../../../utils/UIHelper";
import { Button } from "../Button/Button";

type ArmorySlotButtonProps = {
    armoryType: ArmoryType;
    isActive: boolean;
    onArmoryTypeSelection: (armoryType: ArmoryType) => void;
}

export const ArmorySlotButton = ({ armoryType, isActive, onArmoryTypeSelection }: ArmorySlotButtonProps) => {

    return (
        <>
            <div className={`w-10 h-10 flex items-center justify-center text-tequila ${isActive ? "border-b-2 border-tequila" : ""}`}>
                <Button iconId={armoryThemes[armoryType]?.icon || ''} className="text-[26px]" onClick={() => onArmoryTypeSelection(armoryType)} />
            </div>
        </>
    );
}