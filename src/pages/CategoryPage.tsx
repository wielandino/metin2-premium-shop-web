import { useParams, useSearchParams } from "react-router-dom";
import { SubNavigation } from "../components/pages/CategoryPage/SubNavigation";
import { useMemo } from "react";
import { buildCategoryTree, type CategoryWithSubs } from "../utils/categoryHelper";
import { ItemCard } from "../components/common/ItemCard/ItemCard";
import { mockShopItems } from "../testing/mock/ShopItemMocking";
import { MainContainer } from "../components/common/MainContainer";
import { useTranslation } from "react-i18next";


export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation()

  const activeSubCategoryId = Number(searchParams.get("cat"));

  const items = useMemo(() => {
    let items = mockShopItems;

    if (categoryId === "new") items = mockShopItems.filter(i => i.isNew);
    else if (categoryId === "hot") items = mockShopItems.filter(i => i.isHot);

    return items;
  }, [categoryId]);

  const filteredItems = useMemo(
    () => (activeSubCategoryId > 0)
      ? items.filter(i => i.category !== undefined && i.category.id === activeSubCategoryId) 
      : items, 
      [activeSubCategoryId, items]
  );

  const categoryNavigationTree: CategoryWithSubs[]
    = useMemo(() => buildCategoryTree(items.filter(c => c.category !== undefined).map(c => c.category!)), [items]);

  function handleCategoryClick(categoryId: number) {
    setSearchParams({ cat: categoryId.toString() });
  }

  let categoryTitle;

  switch (categoryId) {
    case "hot": categoryTitle = t('header.navigation.hot'); break;
    case "new": categoryTitle = t('header.navigation.new'); break;
    default: categoryTitle = t('header.navigation.all');
  }



  return (
    <MainContainer activeTabId={categoryId || 'all'} pageHeaderName={categoryTitle}>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0">
        <SubNavigation categories={categoryNavigationTree}
          activeCategoryId={activeSubCategoryId}
          onCategoryClick={handleCategoryClick} />

        <div className="overflow-y-auto h-75 sm:h-87.5 md:h-100 flex-1">
          <ItemCard items={filteredItems} />
        </div>
      </div>
    </MainContainer>
  );
};