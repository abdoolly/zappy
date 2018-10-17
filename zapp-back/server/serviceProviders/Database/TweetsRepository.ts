import { TweetInterface } from "../../../intefaces/models/Tweet";
import { TweetModel } from "../../models/Tweet";
import { BaseRepository } from "./BaseRepository";

class TweetsRepository implements BaseRepository {
    async create(tweet: string, raw = true) {
        let tweetObject = new TweetModel({ tweet });
        return (await tweetObject.save()).toJSON();
    }

    async createBulk(tweets: TweetInterface[]) {
        await TweetModel.collection.insertMany(tweets);
        return tweets;
    }

    async find(...param: any[]): Promise<TweetInterface[]> {
        return [];
    }

    async findOne(...param: any[]) {

    }

    async findBy(...param: any[]) {

    }
}

export const Tweet = new TweetsRepository();