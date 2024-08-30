import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  role: string = "guest";

  changeUserRole(){
    if(this.role == "guest"){
      this.role = "admin"
    }else{
      this.role = "guest"
    }
  }

}
