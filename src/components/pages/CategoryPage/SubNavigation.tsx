import type { CategoryWithSubs } from "../../../utils/categoryHelper";

interface SubNavigationProps {
  categories: CategoryWithSubs[];
  activeCategoryId?: number;
  activeSubCategoryId?: number;
  onCategoryClick: (categoryId: number) => void;
  onSubCategoryClick: (subCategoryId: number) => void;
}

export const SubNavigation = ({
  categories,
  activeCategoryId,
  activeSubCategoryId,
  onCategoryClick,
  onSubCategoryClick
}: SubNavigationProps) => {
  const DEFAULT_ICON = "https://gf3.geo.gfsrv.net/cdn29/23b5f848f1a0b324f6e3c3d3564130.png";

  return (
    <ul className="mr-2">
      {categories.map((categoryWithSubs) => {
        const isMainCategoryActive = activeCategoryId === categoryWithSubs.category.id;

        return (
          <li key={categoryWithSubs.category.id} className="relative group text-[0.846em]">
            <button
              onClick={() => onCategoryClick(categoryWithSubs.category.id)}
              className={`
                w-26.25 text-[#f2e69f] px-1.5 py-2 text-center transition-colors
                ${isMainCategoryActive ? 'catitem-active' : 'bg-[#662d12] hover:bg-[#7d3515]'}
              `}
            >
              <img
                className="h-7.5 w-7.5 mx-auto mb-1"
                src={DEFAULT_ICON}
                alt={categoryWithSubs.category.name}
              />
              {categoryWithSubs.category.name}
            </button>
            
            {categoryWithSubs.subCategories.length > 0 && (
              <ul className="absolute left-full top-0 bg-[#680603] min-w-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categoryWithSubs.subCategories.map((subCategory) => {
                  const isSubCategoryActive = activeSubCategoryId === subCategory.id;

                  return (
                    <li key={subCategory.id}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSubCategoryClick(subCategory.id);
                        }}
                        className={`
                          w-full text-left block px-4 py-2 transition-colors font-serif text-[1.182em]
                          ${isSubCategoryActive
                            ? 'text-[#e8a314]'
                            : 'text-[#f2e69f] hover:text-[#e8a314]'
                          }
                        `}
                      >
                        {subCategory.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};