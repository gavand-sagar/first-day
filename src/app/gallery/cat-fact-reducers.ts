import { createReducer, on } from "@ngrx/store";
import { CatFact } from "./cat-fact-models";
import { changeCatFactDataInTheStore } from "./cat-fact-actions";

export const catFactReducer = createReducer<CatFact>({
  fact: "This should be available to everyone",
  length: 0
},
  on(changeCatFactDataInTheStore, (state, { catFact }) => catFact)
)
