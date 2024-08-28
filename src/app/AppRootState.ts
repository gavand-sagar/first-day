import { Cart } from "./data/cart/cart.reducers";
import { CatFact } from "./gallery/cat-fact-models";

export interface AppRootState {
  count: number,
  cart: Cart,
  catFact: CatFact
}
