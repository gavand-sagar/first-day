import { NotificationService } from './../notification.service';
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
  constructor(private notificationService: NotificationService) {
  }

  doLog() {
    this.notificationService.notify("this is my custom error");
  }

}
