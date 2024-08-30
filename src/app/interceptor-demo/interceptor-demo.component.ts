import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-interceptor-demo',
  templateUrl: './interceptor-demo.component.html',
  styleUrl: './interceptor-demo.component.css'
})
export class InterceptorDemoComponent {

  fact: any = {

  };
  /**
   *
   */
  constructor(private http: HttpClient) {
  }

  handleClick() {
    this.http.get("https://catfact.ninja/fact")
      .pipe(catchError(e => {
        alert("SOMETHING WENT WRONG")
        return e
      })).subscribe((x: any) => {
        this.fact = x
      })
  }

}
