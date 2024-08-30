import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, map, Observable } from "rxjs";

export class RequestLogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Logger Got the requeset", req)

    //return EMPTY
    return next.handle(req)
  }

}
