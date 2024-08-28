import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {


  ordersCount: number = 10;

  constructor() { }

  incrementCount() {
    this.ordersCount++;
  }

}
