import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatFact } from "./cat-fact-models";

const catFactFeatureSelector = createFeatureSelector<CatFact>('catFact')

export const factSelector = createSelector(catFactFeatureSelector, s => s.fact)
