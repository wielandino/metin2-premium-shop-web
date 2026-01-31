import { HeroSlider } from "../components/common/HeroSlider/HeroSlider"
import { Slide } from "../components/common/HeroSlider/Slide"
import { Header } from "../components/pages/ShopPage/Header"

function ShopPage() {

  return (
    <>
      <div className="metin-container page-image mx-auto">
        <Header />
        <HeroSlider autoPlay showArrows>
          <Slide 
            imageUrl="https://gf3.geo.gfsrv.net/cdne2/2fac4b597a6951aee1b098be5aa829.jpg" 
            redirectUrl="/event"
          />

          <Slide 
            imageUrl="https://gf1.geo.gfsrv.net/cdnf8/62fa157dbf43d6179664c19f28ff0d.jpg" 
            redirectUrl="/event"
          />
        </HeroSlider>
      </div>
    </>
  )
}

export default ShopPage
