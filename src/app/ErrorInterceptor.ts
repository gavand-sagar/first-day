import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { NotificationService } from "./notification.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  /**
   *
   */
  constructor(private notificatinService: NotificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map(x => x),
        catchError(x => {
          this.notificatinService.notify(x.message)
          return EMPTY
        }))
  }

}
