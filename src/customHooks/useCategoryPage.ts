import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";
import { mockShopItems } from "../testing/mock/ShopItemMocking";
import { buildCategoryTree, type CategoryWithSubs } from "../utils/categoryHelper";

export const useCategoryPage = () => {
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

    return {
        categoryId,
        activeSubCategoryId,
        filteredItems,
        categoryNavigationTree,
        categoryTitle,
        handleCategoryClick
    };
}