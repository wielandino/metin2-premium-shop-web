import { useCategoryPage } from "../../../customHooks/useCategoryPage";
import { useItemData } from "../../../customHooks/useItemData";
import { ItemCardList } from "../../common/ItemCard/ItemCardList";
import { CategoryNavigation } from "./CategoryNavigation";

export const CategoryContent = () => {
  const { shopItems } = useItemData();
  const { activeSubCategoryId, filteredItems, categoryNavigationTree, handleCategoryClick } = useCategoryPage(shopItems);

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
      <CategoryNavigation categories={categoryNavigationTree}
        activeCategoryId={activeSubCategoryId}
        onCategoryClick={handleCategoryClick} />

      <div className="overflow-y-auto h-75 sm:h-87.5 md:h-100 flex-1">
        <ItemCardList items={filteredItems} />
      </div>
    </div>
  );
};