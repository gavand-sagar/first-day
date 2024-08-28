import { Pipe, PipeTransform } from '@angular/core';
import { OrdersService } from './orders.service';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {


  /**
   *
   */
  constructor(private orderService: OrdersService) {
  }


  transform(value: number, ...args: unknown[]): unknown {
    return "(" + this.orderService.ordersCount + ")";
  }

}
