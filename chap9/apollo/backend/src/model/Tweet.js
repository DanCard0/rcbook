import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/twitter', {
    useNewUrlParser: true
});

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    tweet: String,
    author: String,
    createdAt: Date,
});

const TweetModel = mongoose.model('Tweet', tweetSchema);

export default {
    // Getting all the tweets and sorting descending
    getTweets: () => TweetModel.find().sort({ _id: -1 }),
    // Getting a single Tweet using the _id
    getTweet: _id => TweetModel.findOne({ _id }),
    // Saving a Tweet
    createTweet: args => TweetModel(args).save(),
    // Removing a Tweet by _id
    deleteTweet: args => {
        const { _id } = args;

        TweetModel.remove({ _id }, error => {
            if (error) {
                console.log('Error Removing:', error);
            }
        });

        // Even when we removed a tweet we need to return the object of the tweet
        return args;
    },
    // Updating a Tweet (just the field tweet will be updated)
    updateTweet: args => {
        const { _id, tweet } = args;

        // Searching by _id and then update tweet field.
        TweetModel.update({ _id }, {
                $set: {
                    tweet
                }
            },
            { upsert: true }, error => {
                if (error) {
                    console.log('Error Updating:', error);
                }
            });

        // This is hard coded for now
        args.author = 'dancard';
        args.createdAt = new Date();

        // Returning the updated Tweet
        return args;
    }
};