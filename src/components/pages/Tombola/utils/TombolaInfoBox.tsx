import { Icon } from "../../../common/Icon";
import { TOMBOLA_INFO_TEXT } from "../../../../constants/tombolaConstants";

export const TombolaInfoBox = () => {
  return (
    <div className="mt-4 sm:mt-5 p-3 sm:p-4 bg-[rgba(0,0,0,0.2)] border border-[#662d12]">
      <h3 className="text-[#e8a314] text-sm sm:text-base mb-2 font-bold">
        <Icon icon="circle-info" className="mr-2" />
        {TOMBOLA_INFO_TEXT.title}
      </h3>
      <ul className="text-xs sm:text-sm text-[#f2e69f] space-y-1">
        {TOMBOLA_INFO_TEXT.rules.map((rule) => (
          <li key={rule.tier}>
            <strong className="text-[#e8a314]">{rule.tier}:</strong> {rule.description}
          </li>
        ))}
        <li className="text-red-400">
          <Icon icon="skull-crossbones" className="mr-1" />
          {TOMBOLA_INFO_TEXT.penaltyWarning}
        </li>
      </ul>
    </div>
  );
};
