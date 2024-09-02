import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, count, delay, EMPTY, map, Observable, of, retry, tap, throwError } from "rxjs";

export class RetryInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(x=>{
      console.log(x)
    }))
  }

}
