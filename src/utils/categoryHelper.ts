import type { Category, CategoryWithSubs } from "../api/types/Category"

export const buildCategoryTree = (categories: Category[]): CategoryWithSubs[] => {
    const filtered: Category[] = categories.filter((c, i, arr) => c != null && arr.findIndex(x => x?.id === c.id) === i);
    const result: CategoryWithSubs[] = [];

    const rootCategories = filtered.filter(c => !c.parentCategory);
    const subCategories = filtered.filter(c => c.parentCategory);

    rootCategories.forEach(parent => {
        result.push({
            parentCategory: parent,
            subCategories: subCategories.filter(sub => sub.parentCategory?.id === parent.id),
        });
    });

    return result;
}
