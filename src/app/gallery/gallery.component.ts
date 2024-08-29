import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFact } from './cat-fact-models';
import { AppRootState } from '../AppRootState';
import { Store } from '@ngrx/store';
import { factErrorSelector, factSelector } from './cat-fact-selectors';
import { callCatFactApi, changeCatFactDataInTheStore } from './cat-fact-actions';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  fact$: Observable<string>;
  error$ : Observable<string>
  /**
   *
   */
  constructor(private store: Store<AppRootState>) {
    this.fact$ = this.store.select(factSelector);
    this.error$ = this.store.select(factErrorSelector);
    this.error$.subscribe(x=>{
      if(x){
        alert(x)
      }
    })
  }

  handleClick() {
    this.store.dispatch(callCatFactApi())
    //this.store.dispatch(changeCatFactDataInTheStore({ catFact: { fact: "Some Random new fact", length: 4 } }))
  }

}
