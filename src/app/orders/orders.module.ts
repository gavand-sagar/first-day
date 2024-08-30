import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { CartComponent } from './cart/cart.component';
import { SimplePipe } from './simple.pipe';
import { MyDirectiDirective } from './my-directi.directive';
import { SecondModule } from '../second.module';
import { AdminRequestInterceptor } from '../AdminRequestInterceptor';
import { OnlyGetInterCeptor } from '../OnlyGet';

const ORDER_SERVICE = new InjectionToken("sdfasdf")

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
  exports: [
    OrdersComponent
  ],
  providers: [
    OrdersService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AdminRequestInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: OnlyGetInterCeptor,
    //   multi: true
    // }
  ]
})
export class OrdersModule { }


