import mongoose from 'mongoose';

const tweetIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const tweets = [
    {
        id: tweetIds[0],
        author: "John Doe",
        content: "Hello from John!",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: tweetIds[1],
        author: "Cristian Josan",
        content: "Hello from Cristian!",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: tweetIds[2],
        author: "Billy Jean",
        content: "Hello from Billy!",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];