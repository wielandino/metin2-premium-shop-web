import type { CategoryWithSubs } from "../../../api/types/Category";
import { CategoryNavigationItem } from "./CategoryNavigationItem";

interface CategoryNavigationProps {
  categories: CategoryWithSubs[];
  activeCategoryId: number;
  onCategoryClick: (categoryId: number) => void;
}

export const CategoryNavigation = ({
  categories,
  activeCategoryId,
  onCategoryClick,
}: CategoryNavigationProps) => {
  const activeParentCategoryId = categories.find(
    (cat) => cat.subCategories.some((sub) => sub.id === activeCategoryId),
  )?.parentCategory.id ?? activeCategoryId;

  return (
    <div className="md:mr-2 mb-2 md:mb-0">
      <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide gap-1 md:gap-0 pb-2 md:pb-0">
        {categories.map((categoryWithSubs) => (
          <CategoryNavigationItem
            key={categoryWithSubs.parentCategory.id}
            categoryWithSubs={categoryWithSubs}
            isActive={
              activeParentCategoryId === categoryWithSubs.parentCategory.id
            }
            activeSubCategoryId={activeCategoryId}
            onCategoryClick={onCategoryClick}
          />
        ))}
      </ul>
    </div>
  );
};
