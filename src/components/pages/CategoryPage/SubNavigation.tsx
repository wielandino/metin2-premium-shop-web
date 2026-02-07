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
    <div className="md:mr-2 mb-2 md:mb-0">
      <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide gap-1 md:gap-0 pb-2 md:pb-0">
        {categories.map((categoryWithSubs) => {
          const isMainCategoryActive = activeCategoryId === categoryWithSubs.category.id;

          return (
            <li key={categoryWithSubs.category.id} className="relative group text-[0.7em] sm:text-[0.75em] md:text-[0.846em] shrink-0">
              <button
                onClick={() => onCategoryClick(categoryWithSubs.category.id)}
                className={`
                  w-20 sm:w-24 md:w-26.25 text-[#f2e69f] px-1 sm:px-1.5 py-1.5 sm:py-2 text-center transition-colors catitem
                  ${isMainCategoryActive ? 'catitem-active' : 'bg-[#662d12] hover:bg-[#7d3515]'}
                `}
              >
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-7.5 md:w-7.5 mx-auto mb-0.5 sm:mb-1"
                  src={DEFAULT_ICON}
                  alt={categoryWithSubs.category.name}
                />
                <span className="text-[10px] sm:text-[11px] md:text-[13px] leading-tight block">
                  {categoryWithSubs.category.name}
                </span>
              </button>

              {categoryWithSubs.subCategories.length > 0 && (
                <ul className="md:absolute md:left-full md:top-0 bg-[#680603] w-full md:min-w-50 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-200 md:z-10">
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
                            w-full text-left block px-3 sm:px-4 py-1.5 sm:py-2 transition-colors font-serif text-[0.9em] sm:text-[1em] md:text-[1.182em]
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
    </div>
  );
};