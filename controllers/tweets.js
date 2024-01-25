import Tweet from "../models/Tweet.js";

// Get all the tweets
export const getTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find();
        res.status(200).json(tweets);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// Get a tweet by its id
export const getTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const tweet = await Tweet.findById(id);
        res.status(200).json(tweet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// Create a tweet
export const createTweet = async (req, res) => {
    try {
        const { author, content } = req.body;
        const newTweet = new Tweet({
            author: author,
            content: content,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })

        const tweet = await newTweet.save();
        res.status(201).json(tweet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// Update a tweet
export const updateTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const { author, content } = req.body;
        const tweet = await Tweet.findById(id);
        if (!tweet) {
            return res.status(404).json({ error: `Tweet with id: ${id} not found` });
        }

        tweet.author = author || tweet.author;
        tweet.content = content || tweet.content;
        tweet.updatedAt = Date.now();

        await tweet.save();
        res.status(200).json(tweet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// Delete a tweet
export const deleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const tweet = await Tweet.findById(id);
        if (!tweet) {
            return res.status(404).json({ error: `Tweet with id: ${id} not found` });
        }

        await tweet.remove();
        res.status(200).json(tweet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}