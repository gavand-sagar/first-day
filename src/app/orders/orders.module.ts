import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { CartComponent } from './cart/cart.component';
import { SimplePipe } from './simple.pipe';
import { MyDirectiDirective } from './my-directi.directive';
import { SecondModule } from '../second.module';



@NgModule({
  declarations: [
    OrdersComponent,
    CartComponent,
    SimplePipe,
    MyDirectiDirective
  ],
  imports: [
    CommonModule,
    SecondModule
  ],
  exports:[
    OrdersComponent
  ],
  providers:[OrdersService]
})
export class OrdersModule { }
