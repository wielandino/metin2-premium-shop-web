import { SubNavigation } from "../components/pages/CategoryPage/SubNavigation";
import { ItemCard } from "../components/common/ItemCard/ItemCard";
import { MainContainer } from "../components/common/MainContainer";
import { useCategoryPage } from "../customHooks/useCategoryPage";


export const CategoryPage = () => {
  const vm = useCategoryPage();

  return (
    <MainContainer activeTabId={vm.categoryId || 'all'} pageHeaderName={vm.categoryTitle}>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0">
        <SubNavigation categories={vm.categoryNavigationTree}
          activeCategoryId={vm.activeSubCategoryId}
          onCategoryClick={vm.handleCategoryClick} />

        <div className="overflow-y-auto h-75 sm:h-87.5 md:h-100 flex-1">
          <ItemCard items={vm.filteredItems} />
        </div>
      </div>
    </MainContainer>
  );
};