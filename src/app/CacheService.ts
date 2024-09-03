import { HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface MyCachEntity<T> {
  expiresAt: number;
  data: T
}

@Injectable({
  providedIn: 'root'
})
export class CashService {

  expirationTimeInSeconds = 10

  //cache = new Map<string, MyCachEntity<HttpResponse<any>>>();

  set(req: HttpRequest<any>, response: HttpResponse<any>) {
    let obj = {
      data: response,
      expiresAt: new Date().getTime() + (this.expirationTimeInSeconds * 1000)
    };
    localStorage.setItem(req.urlWithParams, JSON.stringify(obj));
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    let oldDatastr = localStorage.getItem(req.urlWithParams)
    if (oldDatastr) {
      let oldData: MyCachEntity<any> = JSON.parse(oldDatastr);
      if (oldData.expiresAt > new Date().getTime()) {
        return oldData.data;
      }
    }
    return;
  }

}
