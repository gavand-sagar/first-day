import { Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export class OnlyGetInterCeptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method == "GET"){
      return next.handle(req)
    }else{
      return throwError(()=>new Error("Only Get Requests are allowed"))
    }
  }

}
