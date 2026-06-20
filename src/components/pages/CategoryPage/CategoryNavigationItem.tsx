import clsx from "clsx";
import type { CategoryWithSubs } from "../../../api/types/Category";
import { useLocalizedCategory } from "../../../customHooks/useLocalizeHook";
import { SubCategoryList } from "./SubCategoryList";

interface CategoryNavigationItemProps {
  categoryWithSubs: CategoryWithSubs;
  isActive: boolean;
  activeSubCategoryId: number;
  onCategoryClick: (categoryId: number) => void;
}

const DEFAULT_ICON = "/images/star.png";

export const CategoryNavigationItem = ({
  categoryWithSubs,
  isActive,
  activeSubCategoryId,
  onCategoryClick,
}: CategoryNavigationItemProps) => {
  const { parentCategory, subCategories } = categoryWithSubs;
  const localizedCategory = useLocalizedCategory(parentCategory);

  return (
    <li className="relative group text-[1.3em] sm:text-[0.75em] md:text-[0.846em] shrink-0">
      <button
        onClick={() => onCategoryClick(parentCategory.id)}
        className={clsx(
          "min-w-20 sm:w-24 md:w-26.25",
          "text-[#f2e69f] text-center transition-colors",
          "px-1 sm:px-1.5 py-1.5 sm:py-2",
          "catitem",
          isActive
            ? "catitem-active"
            : "bg-[#662d12] hover:bg-[#7d3515]",
        )}
      >
        <img
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-7.5 md:w-7.5 mx-auto mb-0.5 sm:mb-1"
          src={DEFAULT_ICON}
          alt={localizedCategory.name}
        />
        <span className="text-[1.5em] sm:text-[11px] md:text-[13px] leading-tight block">
          {localizedCategory.name}
        </span>
      </button>

      {subCategories.length > 0 && (
        <SubCategoryList
          subCategories={subCategories}
          activeSubCategoryId={activeSubCategoryId}
          onSubCategoryClick={onCategoryClick}
        />
      )}
    </li>
  );
};
