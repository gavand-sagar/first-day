import { Component, Inject } from '@angular/core';
import { LOGGER, Logger } from '../logger.interface';
import { ConsoleLogger } from '../console.logger';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  /**
   *
   */
  constructor(@Inject(LOGGER) private loggers: Logger[]) {
  }

  doLog() {

   for (const logger of this.loggers) {
      logger.log("something")
   }
  }

}
