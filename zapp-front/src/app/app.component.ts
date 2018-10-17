import { Component } from '@angular/core';
import { TweeterService } from './services/Twitter/tweeter-service.service';
import { Tweet } from './interfaces/Tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  title = 'Zappy';
  tweets: Tweet[];

  constructor(public twitter: TweeterService) {

  }

  toggleLoader() {
    this.loading = this.loading ? false : true;
  }

  /**
   * @description getting and settting the new tweets retrieved from the backend
   */
  async getTweets() {
    this.toggleLoader();
    let result = await this.twitter.getTweets();
    this.tweets = result.tweets;
    this.toggleLoader();
  }

}
