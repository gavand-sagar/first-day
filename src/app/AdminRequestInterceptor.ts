import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, Observable, throwError } from "rxjs";
import { UserManagementService } from "./UserMangement";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminRequestInterceptor implements HttpInterceptor {


  /**
   *
   */
  constructor(private userService: UserManagementService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Admin Interceptor")
    if (this.userService.role == "admin") {
      return next.handle(req)
    } else {
      return EMPTY
    }

  }


}
