import express from "express";
import { getTweets, getTweet, createTweet, updateTweet, deleteTweet } from "../controllers/tweets.js";

const router = express.Router();

/* READ */
router.get("/", getTweets);
router.get("/:id", getTweet);

/* CREATE */
router.post("/", createTweet);

/* UPDATE */
router.patch("/:id", updateTweet);

/* DELETE */
router.delete("/:id", deleteTweet);

export default router;