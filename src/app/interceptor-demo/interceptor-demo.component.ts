import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
      .subscribe((x: any) => {
        this.fact = x
      })
  }

}
