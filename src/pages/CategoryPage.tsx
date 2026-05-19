import { useParams, useSearchParams } from "react-router-dom";
import { SubNavigation } from "../components/pages/CategoryPage/SubNavigation";
import { useEffect, useMemo, useState } from "react";
import { buildCategoryTree, type CategoryWithSubs } from "../utils/categoryHelper";
import type { ShopItem } from "../models/ShopItem";
import { ItemCard } from "../components/common/ItemCard";
import { mockShopItems } from "../testing/mock/ShopItemMocking";
import { MainContainer } from "../components/common/MainContainer";


export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = useState<ShopItem[]>([]);
  const activeSubCategoryId = Number(searchParams.get("cat"));

  const filteredItems =
    (activeSubCategoryId > 0) ? items.filter(i => i.category?.id === activeSubCategoryId) : items;

  function handleCategoryClick(categoryId: number) {
    setSearchParams({ cat: categoryId.toString() });
  }

  useEffect(() => {
    // TODO: Change this with a actual API CALL!

    let items = mockShopItems;

    if (categoryId == "new")
      items = items.filter(i => i.isNew);
    else if (categoryId == "hot")
      items = items.filter(i => i.isHot);

    setItems(items);
  }, [categoryId])


  let categoryTitle;

  switch (categoryId) {
    case "hot": categoryTitle = "Beliebte Artikel"; break;
    case "new": categoryTitle = "Neue Artikel"; break;
    default: categoryTitle = "Alle Artikel";
  }

  /**
   *  Non-Null Assertion Operator because useEffect takes care
   *  that the items we recieve from the api is not null and have a category
  */
  const categoryNavigationTree: CategoryWithSubs[]
    = useMemo(() => buildCategoryTree(items!.map(c => c.category!)), [items]);

  return (
    <>
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
    </>
  );
};