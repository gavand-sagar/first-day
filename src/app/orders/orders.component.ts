import { Component } from '@angular/core';
import { OrdersService } from './orders.service';
import { HttpClient } from '@angular/common/http';
import { UserManagementService } from '../UserMangement';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {


  public get OrderCount() {
    return this.orderService.ordersCount;
  }

  result: any;

  public get role(){
    return this.userService.role;
  }

  /**
   *
   */
  constructor(private orderService: OrdersService,
    private userService:UserManagementService,
    private http: HttpClient
  ) {

  }

  toggleUserRole(){
    this.userService.changeUserRole();
  }

  handleClick() {
    this.http.delete("https://catfact.ninja/fact")
    .pipe(catchError(e=>e))


    // this.orderService.incrementCount()
  }

}
