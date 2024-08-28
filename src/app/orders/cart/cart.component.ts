import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {

  public get OrderCount(): number {
    return this.orderService.ordersCount
  }
  /**
   *
   */
  constructor(private orderService: OrdersService) {
  }

}
