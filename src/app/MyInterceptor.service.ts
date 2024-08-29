import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable()
export class AuthTokenIterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Auth interceptor")
    let newheaders = req.headers.set("token", localStorage.getItem("app-token") ?? "default")
    let newReq = req.clone({
      headers: newheaders
    });
    return next.handle(newReq);
  }

}
