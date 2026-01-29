import { ItemDescriptionPage } from "./pages/ItemDescriptionPage"
import { SHOP_ITEM_DUMMY_MODEL_1, SHOP_ITEM_DUMMY_MODEL_2 } from "./testing/ShopItemMocking"

function App() {

  return (
    <>
      <ItemDescriptionPage shopItem={SHOP_ITEM_DUMMY_MODEL_1} />
    </>
  )
}

export default App
