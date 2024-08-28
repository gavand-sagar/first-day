import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { callCatFactApi, changeCatFactDataInTheStore } from "./cat-fact-actions";
import { map, mergeMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CatFact } from "./cat-fact-models";

@Injectable()
export class CatFactEffectsService {
  someName$ = createEffect(() => this.actions$.pipe(ofType(callCatFactApi),
    mergeMap(() =>
      this.http.get<CatFact>("https://catfact.ninja/fact")
        .pipe(map(x => changeCatFactDataInTheStore({ catFact: x })))
    )))

  /**
   *
   */
  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
