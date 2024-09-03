import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { CashService } from "./CacheService";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private casheService: CashService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //cache first approach
    let cashedData = this.casheService.get(req);
    if (cashedData) {
      return of(cashedData)
    } else {
      return next.handle(req).pipe(tap(response => {
        if (response instanceof HttpResponse) {
          this.casheService.set(req, response);
        }
      }));
    }



  }

}
