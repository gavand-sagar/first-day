import { createReducer, on } from "@ngrx/store";
import { CatFact } from "./cat-fact-models";
import { changeCatFactDataInTheStore, setError } from "./cat-fact-actions";

export const catFactReducer = createReducer<CatFact>({
  fact: "This should be available to everyone",
  length: 0,
  error: ''
},
  on(changeCatFactDataInTheStore, (state, { catFact }) => catFact),
  on(setError, (state, { error }) => ({ fact: '', length: 0, error: error }))
)
