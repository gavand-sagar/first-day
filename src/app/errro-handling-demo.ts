import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError } from "rxjs";

@Component({
  selector: 'app-error-handling-demo',
  templateUrl: './error-handling-demo.html'
})
export class ErrorHandlingDemoComponent {


  fact: string = '';

  constructor(private http: HttpClient) {

  }

  callToApi() {
    this.http.get("https://catfact.ninja/fact5")
      .pipe(catchError(e => {
        alert("SOMETHING WENT WRONG")
        return e
      }))
      .subscribe((x: any) => {
        this.fact = x.fact
      })
  }

}
