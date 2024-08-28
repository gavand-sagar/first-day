import { Component } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {


  public get OrderCount(){
    return this.orderService.ordersCount;
  }

  /**
   *
   */
  constructor(private orderService:OrdersService) {

  }

  handleClick() {
    this.orderService.incrementCount()
    }

}
