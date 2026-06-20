import { MainContainer } from "../components/common/MainContainer";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CategoryContent } from "../components/pages/CategoryPage/CategoryContent";

export const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { t } = useTranslation();

  let categoryTitle: string;
  switch (categoryId) {
    case "hot": categoryTitle = t('header.navigation.hot'); break;
    case "new": categoryTitle = t('header.navigation.new'); break;
    default: categoryTitle = t('header.navigation.all');
  }

  return (
    <MainContainer activeTabId={categoryId || 'all'} pageHeaderName={categoryTitle}>
      <CategoryContent />
    </MainContainer>
  );
};
