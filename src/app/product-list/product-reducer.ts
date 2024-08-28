import { createReducer, on } from "@ngrx/store";
import { createEntityAdapter, EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { Product } from "./product.model";
import { addProduct, deleteProduct } from "./product-action";

export interface ProductState extends EntityState<Product> { }

export const adaptor: EntityAdapter<Product> = createEntityAdapter<Product>();

const intialState = adaptor.getInitialState();

export const productReducer = createReducer(
  intialState,
  on(addProduct, (state, { product }) => adaptor.addOne(state, product)),
  on(deleteProduct, (state, { id }) => (adaptor.removeOne(state, id)))
)


export const { selectAll, selectTotal } = adaptor.getSelectors();
