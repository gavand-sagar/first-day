import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from './counter.actions';
import { AppRootState } from './AppRootState';
import { Cart } from './data/cart/cart.reducers';
import { addProduct, incrementFirst, incrementSecond } from './data/cart/cart.actions';
import { itemsSelector, totalItemsCountSelector, additionNumberSelector, divisionSelector } from './data/cart/cart.selectors';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-day';
  count$: Observable<number>;
  items$: Observable<string[]>;
  fruit: string = '';
  itemsCount$: Observable<number>
  firstNumber: number = 0;
  secondNumber: number = 0;
  addition$: Observable<number>;
  division$: Observable<number>;

  public get notificationObservable() : Observable<string[]>{
    return this.notificationService.notification$;
  }

  /**
   *
   */
  constructor(private store: Store<AppRootState>,
    private notificationService: NotificationService
  ) {
    this.count$ = this.store.select("count");
    this.items$ = this.store.select(itemsSelector);
    this.itemsCount$ = this.store.select(totalItemsCountSelector);
    this.addition$ = this.store.select(additionNumberSelector)
    this.division$ = this.store.select(divisionSelector)
  }

  handleNumberChange() {
    this.store.dispatch(incrementFirst({ value: this.firstNumber }))
    this.store.dispatch(incrementSecond({ value: this.secondNumber }))
  }

  incrementGlobalCounter() {
    this.store.dispatch(increment())
  }

  handleClick() {
    this.store.dispatch(addProduct({ productName: this.fruit }))
  }


}
