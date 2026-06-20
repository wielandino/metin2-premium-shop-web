import clsx from "clsx";
import type { Category } from "../../../api/types/Category";
import { SubCategoryItem } from "./SubCategoryItem";

interface SubCategoryListProps {
  subCategories: Category[];
  activeSubCategoryId: number;
  onSubCategoryClick: (subCategoryId: number) => void;
}

export const SubCategoryList = ({
  subCategories,
  activeSubCategoryId,
  onSubCategoryClick,
}: SubCategoryListProps) => {

  return (
    <ul
      className={clsx(
        "md:absolute md:left-full md:top-0",
        "w-full md:min-w-50",
        "md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible",
        "transition-all duration-200 md:z-10",
        "bg-[#680603]",
      )}
    >
      {subCategories.map((subCategory) => (
        <SubCategoryItem
          key={subCategory.id}
          subCategory={subCategory}
          isActive={activeSubCategoryId === subCategory.id}
          onSubCategoryClick={onSubCategoryClick}
        />
      ))}
    </ul>
  );
};
