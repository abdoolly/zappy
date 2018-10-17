import { Schema, model } from 'mongoose';

const ObjectId = Schema['ObjectId'];

export const TweetSchema = new Schema({
    id: ObjectId,
    tweet: String
});

export let TweetModel = model('Tweets', TweetSchema);