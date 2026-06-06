type ItemInfoProps = {
  features: string[];
  description?: string;
};

export const ItemInfo = ({ features, description }: ItemInfoProps) => {
  return (
    <div className="sm:col-span-1 md:col-span-2 contrast-box grey-box">
      <div className="tab-content px-3 sm:px-4">
        <p className="text-[#5a3825] mb-2 sm:mb-3 font-semibold text-sm sm:text-base">Info</p>

        <ul className="mb-3 sm:mb-4 list-disc list-inside text-xs sm:text-sm space-y-0.5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {description && (
        <p className="mt-3 sm:mt-4 p-2 sm:p-3 bg-white/20 border-l-4 border-[#8b4513] text-[#5a3825] text-xs sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
};
