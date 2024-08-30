import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notificationSubject: BehaviorSubject<string[]>;
  public notification$: Observable<string[]>;

  /**
   *
   */
  constructor() {
    this._notificationSubject = new BehaviorSubject<string[]>([]);
    this.notification$ = this._notificationSubject.asObservable();
  }

  notify(messege: string, time: number = 5000) {
    this._notificationSubject.next([...this._notificationSubject.value, messege]);
    setTimeout(() => {
      let prev = this._notificationSubject.value;
      let newData = prev.filter(x=>x != messege);
      this._notificationSubject.next(newData)
    }, time)
  }
}
