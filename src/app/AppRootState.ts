import { Cart } from "./data/cart/cart.reducers";
import { CatFact } from "./gallery/cat-fact-models";
import { ProductState } from "./product-list/product-reducer";

export interface AppRootState {
  count: number,
  cart: Cart,
  catFact: CatFact,
  products: ProductState
}
