import { createAction, props } from "@ngrx/store";
import { Product } from "./product.model";

export const addProduct = createAction('[product] add', props<{ product: Product }>())
export const deleteProduct = createAction('[product] delete', props<{ id: string }>())
