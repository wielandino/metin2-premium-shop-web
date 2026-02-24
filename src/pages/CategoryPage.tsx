import { useParams, useSearchParams } from "react-router-dom";
import { Header } from "../components/pages/ShopPage/Header";
import { Navigation } from "../components/common/Navigation/Navigation";
import { SubNavigation } from "../components/pages/CategoryPage/SubNavigation";
import { useEffect, useMemo, useState } from "react";
import { buildCategoryTree, type CategoryWithSubs } from "../utils/categoryHelper";
import type { ShopItem } from "../models/ShopItem";
import { mockShopItems } from "../testing/ShopItemMocking";
import { ItemCard } from "../components/common/ItemCard";


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

    if(categoryId == "new")
      items = items.filter(i => i.isNew);
    else if(categoryId == "hot")
      items = items.filter(i => i.isHot);

    setItems(items);
  }, [categoryId])


  /**
   *  Non-Null Assertion Operator because useEffect takes care
   *  that the items we recieve from the api is not null and have a category
  */
  const categoryNavigationTree: CategoryWithSubs[]
    = useMemo(() => buildCategoryTree(items!.map(c => c.category!)), [items]);

  return (
    <>
      <div className="metin-container page-image mx-auto">
        <Header />

        <div className="px-3 sm:px-4 md:px-5">
          <div className="mt-2">
            <Navigation
              activeTab={categoryId || 'all'}
            />
          </div>

          <div className="mt-3 sm:mt-4 md:mt-5">
            <h2 className="item-sample text-[#f2e69f] border-[#E8A314] mb-2 sm:mb-2.5 border-b text-lg sm:text-xl md:text-2xl">
              CategoryTitle
            </h2>

            <div className="flex flex-col md:flex-row gap-2 md:gap-0">
              <SubNavigation categories={categoryNavigationTree}
                activeCategoryId={activeSubCategoryId}
                onCategoryClick={handleCategoryClick} />

              <div className="overflow-y-auto h-75 sm:h-87.5 md:h-100 flex-1">
                <ItemCard items={filteredItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};