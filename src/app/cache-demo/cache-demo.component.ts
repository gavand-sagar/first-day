import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cache-demo',
  templateUrl: './cache-demo.component.html',
  styleUrl: './cache-demo.component.css'
})
export class CacheDemoComponent {
  fact: string = '';
  /**
   *
   */
  constructor(private http: HttpClient) {
  }

  callCatFactApi() {


    this.http.get("https://catfact.ninja/fact")
      .subscribe((x: any) => {
        this.fact = x.fact
      })





  }
}
