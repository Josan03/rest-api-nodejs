import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tweetRoutes from "./routes/tweets.js";
import Tweet from "./models/Tweet.js";
import { tweets } from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());

/* ROUTES */
app.use("/tweets", tweetRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // /* ADD DATA ONE TIME */
    // Tweet.insertMany(tweets);
}).catch((error) => console.log(`${error} did not connect`));