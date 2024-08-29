import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { callCatFactApi, changeCatFactDataInTheStore, setError } from "./cat-fact-actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CatFact } from "./cat-fact-models";

@Injectable()
export class CatFactEffectsService {
  someName$ = createEffect(() => this.actions$.pipe(ofType(callCatFactApi),
    mergeMap(() =>
      this.http.get<CatFact>("https://catfact.ninja/fact")
        .pipe(map(x => changeCatFactDataInTheStore({ catFact: x })),
          catchError(e => of(setError(e)))
        )
    )))

  /**
   *
   */
  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
