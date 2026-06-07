type ItemHighlightsProps = {
  features: string[];
};

export const ItemHighlights = ({ features }: ItemHighlightsProps) => {
  return (
    <>
      <div className="mb-1">
        <img src="/images/star.png"
          width="12"
          height="12"
          className="inline-block mr-0.5 sm:mr-1 w-3 h-3 sm:w-3.75 sm:h-3.75" />
        <p className="inline-block text-[#662d12] text-[1.2em] sm:text-[11px]">Highlights</p>
      </div>

      <div className="flex-1 overflow-hidden text-[1.2em] sm:text-[0.8em] md:text-[11px] leading-[1.2] mb-1">
        <ul className="list-none p-0 m-0 line-clamp-3 sm:line-clamp-4">
          {features.map((feature, index) => (
            <li key={index}>
              • {feature}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
