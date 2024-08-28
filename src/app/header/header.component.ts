import { Component } from '@angular/core';
import { MyCommonService } from '../my-common.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[MyCommonService]
})
export class HeaderComponent {

  public get username() {
    return this.service.username
  }

  /**
   *
   */
  constructor(private service: MyCommonService) {
  }


  handleClick() {
    this.service.changeUsername("Superman");
  }



}
