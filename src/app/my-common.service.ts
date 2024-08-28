import { Injectable } from '@angular/core';

@Injectable()
export class MyCommonService {

  username: string = "Sagar"

  constructor() {
  }

  changeUsername(username:string){
    this.username = username;
  }
}
