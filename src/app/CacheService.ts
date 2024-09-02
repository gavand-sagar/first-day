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

  cache = new Map<string, MyCachEntity<HttpResponse<any>>>();

  set(req: HttpRequest<any>, response: HttpResponse<any>) {
    this.cache.set(req.urlWithParams, {
      data: response,
      expiresAt: new Date().getTime() + (this.expirationTimeInSeconds * 1000)
    });
  }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    let oldData = this.cache.get(req.urlWithParams)
    if (oldData && oldData.expiresAt > new Date().getTime()) {
      return oldData.data;
    }
    return;
  }

}
