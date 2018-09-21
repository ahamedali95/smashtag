import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon } from 'semantic-ui-react';

const TweetCollection = (props) => {
  console.log("inside tweetcollection", props);

  const tweets = props.tweets.map(tweet => {
    return (
      <Feed size="large">
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User>
            </Feed.Summary>
          <Feed.Extra text>{tweet.content}</Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                  0 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  });

  return(
    <ul>
      {
        tweets
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    users: state.users
  };
}

export default connect(mapStateToProps)(TweetCollection);
