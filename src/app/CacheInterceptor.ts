import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, from, map, mergeMap, Observable, of, switchMap, tap } from "rxjs";
import { CashService } from "./CacheService";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private casheService: CashService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.casheService.get(req)).pipe(
      mergeMap(x => {
        if (x) {
          return of(x)
        } else {
          return next.handle(req).pipe(tap(x => {
            if (x instanceof HttpResponse) {
              this.casheService.set(req, x)
            }
          }))
        }
      })
    )

    //cache first approach
    // let cashedData = this.casheService.get(req);
    // if (cashedData) {
    //   return of(cashedData)
    // } else {
    //   return next.handle(req).pipe(tap(response => {
    //     if (response instanceof HttpResponse) {
    //       this.casheService.set(req, response);
    //     }
    //   }));
    // }



  }

}
