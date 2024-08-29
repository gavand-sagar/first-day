import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class RequestLogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Logger Got the requeset", req)

    return next.handle(req).pipe(map(x=>{
      console.log("Logger Got the response", x)
      return x;
    }));
  }

}
