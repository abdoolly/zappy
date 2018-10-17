import { generalUtils } from "../Utils/generalUtils";
import { Tweet } from "../Database/TweetsRepository";
import { TweetInterface } from "../../../intefaces/models/Tweet";
let Twitter = require('twitter');

export class twitterServiceProvider {
    private utils = new generalUtils();

    private consumerKey = 'LyZ0fu7v7l2tE2OLiZOS4VGaz';
    private consumerSecretKey = 'WyiS2HZaIcJQLcsYiiv2vIaMOpomjD8fQ5yF8RVBuKvJducbjX';
    private accessToken = '107007348-V377OHOkxtFIDRJX68MwrngWdDuWMSGBmoxJdcnw';
    private accessTokenSecret = 'wW4inWMBrnvXjGat4SuUnhbjPwg7afdbDLIHDzkkGZUKz';
    private myUserScreenName = 'man_zappy';

    async getTweets(): Promise<TweetInterface[]> {
        let client = new Twitter({
            consumer_key: this.consumerKey,
            consumer_secret: this.consumerSecretKey,
            access_token_key: this.accessToken,
            access_token_secret: this.accessTokenSecret
        });

        let params = { screen_name: this.myUserScreenName, count: 10 };
        try {
            let tweets: TweetInterface[] = await client.get('statuses/user_timeline', params);
            return tweets.map((item: any) => ({ tweet: item.text }));
        } catch (err) {
            console.log('err', err);
            return [];
        }
    }

    async saveTweets() {
        let tweets = await this.getTweets();
        return await Tweet.createBulk(tweets);
    }
}