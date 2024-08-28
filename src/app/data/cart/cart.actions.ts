import { createAction, props } from "@ngrx/store";

export const addProduct = createAction("[Products] add", props<{ productName: string }>())

export const incrementFirst = createAction('[Cart] first inc', props<{ value: number }>())

export const incrementSecond = createAction('[Cart] second inc', props<{ value: number }>())
