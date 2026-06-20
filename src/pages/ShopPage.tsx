import { HeroSlider } from "../components/common/HeroSlider/HeroSlider"
import { Slide } from "../components/common/HeroSlider/Slide"
import { mockShopItems } from "../testing/mock/ShopItemMocking";
import { useTranslation } from "react-i18next";
import { MainContainer } from "../components/common/MainContainer";
import { ItemCardList } from "../components/common/ItemCard/ItemCardList";

export const ShopPage = () => {

  const { t } = useTranslation()

  return (
    <MainContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-5 mt-3 sm:mt-5">
        <div className="sm:col-span-2 md:col-span-2">
          <HeroSlider autoPlay showArrows interval={10000}>
            <Slide imageUrl="/images/events/event_1.jpg" redirectUrl="/event">
              <div className="slider-banner">
                <h3>Event</h3>
                <p>Begib dich auf Beutezug mit der neuen Loot-Box im Shop: Schnee-Leonidas &amp; Loot-Pass erwarten dich!</p>
              </div>
            </Slide>
            <Slide imageUrl="/images/events/event_3.jpg" redirectUrl="/event">
              <div className="slider-banner">
                <h3>Scam</h3>
                <p>Lass dich heute mal fett scammen von uns ! :D</p>
              </div>
            </Slide>
          </HeroSlider>
        </div>

        <div className="sm:col-span-2 md:col-span-1">
          <HeroSlider autoPlay showArrows interval={200000}>
            <Slide imageUrl="/images/events/event_2.jpg" redirectUrl="/event">
              <div className="slider-banner">
                <h3>Event</h3>
                <p>Jetzt gehts ab</p>
              </div>
            </Slide>
          </HeroSlider>
        </div>
      </div>

      <div className="mt-3 sm:mt-5 pb-5">
        <h2 className="item-sample text-[#f2e69f] border-tequila mb-2 sm:mb-2.5 border-b text-lg sm:text-xl md:text-2xl">
          {t('header.navigation.hot')}
        </h2>
        <ItemCardList items={mockShopItems} isCarousel={true} />
      </div>

    </MainContainer>
  )
}