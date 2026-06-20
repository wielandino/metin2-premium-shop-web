import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";
import { buildCategoryTree } from "../utils/categoryHelper";
import type { ShopItem } from "../api/types/ShopItem";
import type { CategoryWithSubs } from "../api/types/Category";

export const useCategoryPage = (shopItems: ShopItem[]) => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [searchParams, setSearchParams] = useSearchParams();  

    const { t } = useTranslation()

    const activeSubCategoryId = Number(searchParams.get("cat"));

    const items = useMemo(() => {
        let items = shopItems;
        console.log(items)
        if (categoryId === "new") items = items.filter(i => i.isNew);
        else if (categoryId === "hot") items = items.filter(i => i.isHot);

        return items;
    }, [categoryId, shopItems]);

    const filteredItems = useMemo(
        () => (activeSubCategoryId > 0)
            ? items.filter(i => i.category != null && i.category.id === activeSubCategoryId)
            : items,
        [activeSubCategoryId, items]
    );

    const categoryNavigationTree: CategoryWithSubs[]
        = useMemo(() => buildCategoryTree(items.filter(c => c.category != null).map(c => c.category!)), [items]);

    function handleCategoryClick(categoryId: number) {
        setSearchParams({ cat: categoryId.toString() });
    }

    let categoryTitle;

    switch (categoryId) {
        case "hot": categoryTitle = t('header.navigation.hot'); break;
        case "new": categoryTitle = t('header.navigation.new'); break;
        default: categoryTitle = t('header.navigation.all');
    }

    return {
        categoryId,
        activeSubCategoryId,
        filteredItems,
        categoryNavigationTree,
        categoryTitle,
        handleCategoryClick
    };
}