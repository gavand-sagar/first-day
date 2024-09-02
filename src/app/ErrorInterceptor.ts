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
          console.log(x)
          if(x.status == 500){
            this.notificatinService.notify("Internal Server Error.");
            return EMPTY;
          }
          if(x.status == 404){
            this.notificatinService.notify("Request not found.");
            return EMPTY;
          }
          if(x.status == 400){
            this.notificatinService.notify("Bad Request.");
            return EMPTY;
          }
          this.notificatinService.notify("Someting went wrong.")
          return EMPTY
        }))
  }

}
