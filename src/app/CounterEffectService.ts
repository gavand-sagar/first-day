import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.actions";
import { mergeMap, of } from "rxjs";
import { addProduct } from "./data/cart/cart.actions";

@Injectable()
export class CounterEffectService {

  someName$ = createEffect(() => this.actions$.pipe(ofType(increment), mergeMap(() => of(addProduct({ productName: "Apple" })))))

  /**
   *
   */
  constructor(private actions$: Actions) {

  }

}
