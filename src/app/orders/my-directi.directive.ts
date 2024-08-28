import { Directive } from '@angular/core';
import { OrdersService } from './orders.service';

@Directive({
  selector: '[appMyDirecti]'
})
export class MyDirectiDirective {

  constructor(private orderService: OrdersService) {

  }


}
