import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    //console.log("Inside");

    let newCount = state + 1;
    return newCount;
  }),
  on(decrement, (state) => state - 2),
  on(reset, (state) => 0)
);
