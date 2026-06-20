import clsx from "clsx";
import type { Category } from "../../../api/types/Category";
import { useLocalizedCategory } from "../../../customHooks/useLocalizeHook";

interface SubCategoryItemProps {
  subCategory: Category;
  isActive: boolean;
  onSubCategoryClick: (subCategoryId: number) => void;
}

export const SubCategoryItem = ({
  subCategory,
  isActive,
  onSubCategoryClick,
}: SubCategoryItemProps) => {
  const localizedCategory = useLocalizedCategory(subCategory);

  return (
    <li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSubCategoryClick(subCategory.id);
        }}
        className={clsx(
          "w-full block transition-colors ",
          "px-3 sm:px-4 py-1.5 sm:py-2",
          "text-left text-[0.9em] sm:text-[1em] md:text-[1.182em]",
          "font-serif",
          isActive
            ? "text-tequila"
            : "text-[#f2e69f] hover:text-tequila",
        )}
      >
        {localizedCategory.name}
      </button>
    </li>
  );
};
