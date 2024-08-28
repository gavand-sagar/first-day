import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppRootState } from "../../AppRootState";
import { Cart } from "./cart.reducers";

const cartSelector = createFeatureSelector<Cart>('cart');

export const itemsSelector = createSelector(cartSelector, state => state.items);

export const paymentTypeSelector = createSelector(cartSelector, cart => cart.paymentType)

export const totalItemsCountSelector = createSelector(cartSelector, cart => {
  return cart.items.length
})

export const firstNumberSelector = createSelector(cartSelector,store=>store.number1)
export const secondNumberSelector = createSelector(cartSelector,store=>store.number2)
export const additionNumberSelector = createSelector(cartSelector,store=> store.number1 + store.number2)
export const divisionSelector = createSelector(cartSelector,store=> store.number1 / store.number2)
