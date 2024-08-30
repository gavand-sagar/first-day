import { Component, Inject } from '@angular/core';
import { LOGGER, Logger } from '../logger.interface';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css',
})
export class ForumsComponent {

  /**
   *
   */
  constructor(@Inject(LOGGER) private loggers: Logger[]) {

  }

  doLog() {
    this.loggers[0].log("This is from Forums")
  }

}
