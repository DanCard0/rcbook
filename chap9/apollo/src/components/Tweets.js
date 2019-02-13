import React, { Component } from 'react';

import Tweet from './Tweet';
import CreateTweet from './CreateTweet';
import Query from '../shared/components/Query';

import { QUERY_GET_TWEETS } from '../graphql/queries';

import './Tweets.css';

class Tweets extends Component {
    render() {
        return (
            <div className="tweets">
                <CreateTweet />
                {/**
                 * Executing QUERY_GET_TWEETS query and render our Tweet component
                 */}
                <Query query={QUERY_GET_TWEETS} render={Tweet} />
            </div>
        );
    }
}

export default Tweets;