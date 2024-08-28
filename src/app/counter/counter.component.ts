import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TempComponent } from '../temp/temp.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { increment } from '../counter.actions';
import { AppRootState } from '../AppRootState';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [TempComponent, HttpClientModule, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  message: string = "";
  count$: Observable<number>;
  /**
   *
   */
  constructor(private httpClient: HttpClient,
    private chageDetectionRef: ChangeDetectorRef,
    private store: Store<AppRootState>
  ) {
    this.count$ = this.store.select("count")
  }


  otherActivity() {
    this.store.dispatch(increment())
  }

  doSomething() {
    this.httpClient.get("https://dummyjson.com/products/1")
      .subscribe((response: any) => {
        this.message = response.title;
        // this.chageDetectionRef.detectChanges();
        this.chageDetectionRef.detach();
      });
  }

  ngOnInit(): void {
    this.message = "APPLE"
  }

}
