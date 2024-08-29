import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";

export class ResposeModifierInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("We are in the Response interceptor")

    return next.handle(req).pipe(map((response: HttpEvent<any>) => {
      console.log("We have received the response")
      if (response instanceof HttpResponse) {
        let customResponse = response.clone({
          body: {
            body: response.body,
            stausCode: response.status
          }
        });
        return customResponse
      }
      return response
    }));
  }

}

