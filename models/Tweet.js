import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema({
    id: String,
    author: String,
    content: String,
    createdAt: ({ type: Date, default: Date.now }),
    updatedAt: ({ type: Date, default: Date.now })
});

const Tweet = mongoose.model("Tweet", TweetSchema);

export default Tweet;