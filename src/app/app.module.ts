import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { AppRootState } from './AppRootState';
import { cartReducer } from './data/cart/cart.reducers';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffectService } from './CounterEffectService';
import { GalleryComponent } from './gallery/gallery.component';
import { catFactReducer } from './gallery/cat-fact-reducers';
import { CatFactEffectsService } from './gallery/CatFact.service';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './product-list/product-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InterceptorDemoComponent } from './interceptor-demo/interceptor-demo.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenIterceptor } from './MyInterceptor.service';
import { RequestLogInterceptor } from './RequestLogInterceptor';
import { ResposeModifierInterceptor } from './ResponseModifier';
import { ForumsComponent } from './forums/forums.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LOGGER } from './logger.interface';
import { AlertLogger, ConsoleLogger } from './console.logger';
import { ErrorHandlingDemoComponent } from './errro-handling-demo';
import { ErrorInterceptor } from './ErrorInterceptor';
import { RetryInterceptor } from './RetryInterceptor';
import { CacheDemoComponent } from './cache-demo/cache-demo.component';
import { CacheInterceptor } from './CacheInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ProductListComponent,
    InterceptorDemoComponent,
    ForumsComponent,
    ReviewsComponent,
    ErrorHandlingDemoComponent,
    CacheDemoComponent
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestLogInterceptor,
    //   multi: true
    // }
    // ,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthTokenIterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ResposeModifierInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RetryInterceptor,
    //   multi: true
    // }
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    BrowserModule,
    StoreModule.forRoot<AppRootState>({
      count: counterReducer,
      catFact: catFactReducer,
      cart: cartReducer,
      products: productReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    EffectsModule.forRoot([CounterEffectService, CatFactEffectsService]),
    OrdersModule,
    CounterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
