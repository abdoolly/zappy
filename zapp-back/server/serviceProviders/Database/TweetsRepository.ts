import { TweetInterface } from "../../../intefaces/models/Tweet";
import { TweetModel } from "../../models/Tweet";
import { BaseRepository } from "./BaseRepository";

class TweetsRepository extends BaseRepository<any, any> {
    model = TweetModel;
}

export const Tweet = TweetsRepository.initializeInstance<TweetInterface, TweetInterface>();