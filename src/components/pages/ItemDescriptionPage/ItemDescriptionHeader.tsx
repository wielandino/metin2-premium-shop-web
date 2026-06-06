type ItemDescriptionHeaderProps = {
  name: string;
  totalPrice: number;
};

export const ItemDescriptionHeader = ({ name, totalPrice }: ItemDescriptionHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-3 sm:mb-4 md:mb-5">
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5a3825] mb-1 sm:mb-2 leading-tight">
          {name}
        </h2>
      </div>

      <div className="text-left sm:text-right">
        <span className="text-xs sm:text-sm text-[#5a3825] mr-2">Preis:</span>
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5a3825]">
          {totalPrice} DR
        </span>
      </div>
    </header>
  );
};
