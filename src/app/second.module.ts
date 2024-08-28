import { NgModule } from "@angular/core";
import { SecondPipe } from "./second.pipe";
import { SecondService } from "./second.service";


@NgModule({
  declarations: [
    SecondPipe
  ],
  exports: [
    SecondPipe
  ],
  providers: [
    SecondService
  ]
})
export class SecondModule {

}
