import { Component } from '@angular/core';
import { MyCommonService } from '../my-common.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [MyCommonService]
})
export class SidebarComponent {




  public get Username(): string {
    return this.service.username
  }

  /**
   *
   */
  constructor(private service: MyCommonService) {

  }

  handleClick() {


    import("./util").then(x => {
      let s = new x.Utils();
      s.doSomething();
    })



    this.service.changeUsername("Iron Man");
  }


}
