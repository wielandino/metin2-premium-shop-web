import { useParams } from "react-router-dom";
import { Header } from "../components/pages/ShopPage/Header";
import { Navigation } from "../components/common/Navigation/Navigation";
import { SubNavigation } from "../components/pages/CategoryPage/SubNavigation";
import { useEffect, useMemo, useState } from "react";
import { buildCategoryTreeFromItems, type CategoryWithSubs } from "../utils/categoryHelper";
import type { ShopItem } from "../models/ShopItem";
import { mockShopItems } from "../testing/ShopItemMocking";


export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    // TODO: Change this with a actual API CALL!
    setItems(mockShopItems);
  }, [categoryId])

  /**
   *  Non-Null Assertion Operator because useEffect takes care
   *  that the items we recieve from the api is not null and have a category
  */
  const categoryNavigationTree: CategoryWithSubs[]
    = useMemo(() => buildCategoryTreeFromItems(items!.map(c => c.category!)), [items]);

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
              <SubNavigation categories={categoryNavigationTree} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};