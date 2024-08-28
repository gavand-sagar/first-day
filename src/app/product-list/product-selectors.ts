import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState, selectAll } from "./product-reducer";

const selectProductState = createFeatureSelector<ProductState>('products')

export const selectAllProduct = createSelector(selectProductState,selectAll)
