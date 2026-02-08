import { Icon } from "../common/Icon";
export const EmptyCartView = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] p-8 sm:p-12 text-center border border-[#662d12]">
      <Icon icon="shopping-cart" className="text-6xl text-[#662d12] mb-4" />
      <p className="text-[#f2e69f] text-lg">Dein Warenkorb ist leer</p>
    </div>
  );
};
