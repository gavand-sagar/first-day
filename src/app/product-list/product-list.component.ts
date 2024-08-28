import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRootState } from '../AppRootState';
import { Observable } from 'rxjs';
import { addProduct } from './product-action';
import { Product } from './product.model';
import { selectAllProduct } from './product-selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
handleAdd() {
this.store.dispatch(addProduct({product:{id:(new Date().getTime().toString()),brand:"pple",price:1233}}))
}
  data$:Observable<any>;
  products$:Observable<Product[]>;
  constructor(private store: Store<AppRootState>) {
    this.data$ = this.store.select('products');
    this.products$ = this.store.select(selectAllProduct)
  }
}
