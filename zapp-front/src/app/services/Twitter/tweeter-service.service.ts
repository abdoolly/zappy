import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../../interfaces/Tweet';

@Injectable({
  providedIn: 'root'
})
export class TweeterService {

  baseUrl = 'https://5a27d927.ngrok.io';

  constructor(private http: HttpClient) { }

  async getTweets(screenName: string = null): Promise<{ tweets: Tweet[] }> {
    try {
      return await this.http.get<{ tweets: Tweet[] }>(`${this.baseUrl}/api/twitter/tweets?screenName=${screenName || 'man_zappy'}`).toPromise();
    } catch (err) {
      console.log(err);
      return { tweets: [] };
    }
  }

}
