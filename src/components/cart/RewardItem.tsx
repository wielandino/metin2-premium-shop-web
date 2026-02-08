import { Icon } from "../common/Icon";
import type { PurchaseReward } from "../../models/Cart";

interface RewardItemProps {
  reward: PurchaseReward;
}

export const RewardItem = ({ reward }: RewardItemProps) => {
  const renderIcon = () => {
    switch (reward.type) {
      case 'dr_voucher':
        return <Icon icon="money-bill-wave" className="text-3xl text-[#e8a314]" />;
      case 'tombola_ticket':
        return <Icon icon="ticket" className="text-3xl text-[#e8a314]" />;
      case 'yabbie_coins':
        return reward.item ? (
          <img
            src={`/images/items/${reward.item.imageName}.png`}
            alt={reward.item.name}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <Icon icon="coins" className="text-3xl text-[#e8a314]" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[rgba(0,0,0,0.3)] p-3 border border-[#662d12] flex items-center gap-3">
      {renderIcon()}
      <span className="text-[#f2e69f] font-bold">{reward.description}</span>
    </div>
  );
};
