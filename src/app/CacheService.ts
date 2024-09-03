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

  expirationTimeInSeconds = 100

  set(req: HttpRequest<any>, response: HttpResponse<any>) {

    let obj = {
      data: response,
      expiresAt: new Date().getTime() + (this.expirationTimeInSeconds * 1000)
    };
    if ('caches' in window) {
      caches.open("my-cache-store")
        .then(c => {
          c.put(req.urlWithParams, new Response(JSON.stringify(obj)))
        })
    }
  }



  async get(req: HttpRequest<any>): Promise<HttpResponse<any> | undefined> {
    if ('caches' in window) {
      let c = await caches.open("my-cache-store");
      let response = await c.match(req.urlWithParams)
      let data: MyCachEntity<any> = await response?.json();
      if (data && data.expiresAt > new Date().getTime()) {
        return data.data
      } else {
        caches.delete(req.urlWithParams);
      }
    }
    return undefined
  }

}
