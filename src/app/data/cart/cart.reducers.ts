import { createReducer, on } from "@ngrx/store";
import { addProduct, incrementFirst, incrementSecond } from "./cart.actions";

export interface Cart {
  items: string[],
  paymentType: string;
  number1: number;
  number2: number;
}

const initialState: Cart = {
  items: ["Apples", "Bananas"],
  paymentType: "Sagar",
  number1: 0,
  number2: 0
}

export const cartReducer = createReducer<Cart>(
  initialState,
  on(addProduct, (state, { productName }) => {
    return {
      ...state,
      items: [...state.items, productName]
    }
  }),
  on(incrementFirst, (state, { value }) => {
    return { ...state, number1: value }
  }),
  on(incrementSecond, (state, { value }) => ({ ...state, number2: value }))
)
