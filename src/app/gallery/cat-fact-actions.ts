import { createAction, props } from "@ngrx/store";
import { CatFact } from "./cat-fact-models";

export const callCatFactApi = createAction("[CatFact] Load")
export const changeCatFactDataInTheStore = createAction("[Cat Fact] change", props<{ catFact: CatFact }>());
export const setError = createAction("[Cat Fact] error", props<{ error: string }>());
