import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    BrowserModule,
    StoreModule.forRoot<AppRootState>({
      count: counterReducer,
      catFact: catFactReducer,
      cart: cartReducer
    }),
    EffectsModule.forRoot([CounterEffectService, CatFactEffectsService]),
    OrdersModule,
    CounterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
