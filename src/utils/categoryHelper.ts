import type { Category } from "../api/types/Category"

interface CategoryWithSubs {
    parentCategory: Category
    subCategories: Category[]
}

function buildCategoryTree(categories: Category[]): CategoryWithSubs[] {
    const filtered: Category[] = categories.filter(c => c != null);
    const result: CategoryWithSubs[] = [];


    filtered.forEach(category => {
        const isSubCategory = category.parentCategory !== undefined;
        const mainCategory = category.parentCategory ?? category;

        // Create main category if it does not exist in array
        let entry = result.find(r => r.parentCategory.id === mainCategory.id);
        if (!entry)
        {
            entry = { parentCategory: mainCategory, subCategories: [] };
            result.push(entry);
        }

        if (isSubCategory) 
            entry.subCategories.push(category);
    });

    return result;
}


export { buildCategoryTree };
export type { CategoryWithSubs };
