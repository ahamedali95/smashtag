import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet.js";

const TweetCollection = (props) => {
  //console.log("inside tweetcollection", props);
  const filteredTweetsByTerm = props.tweets.filter(tweet => tweet.content.indexOf(props.searchTerm) !== -1);
  const tweetCards = filteredTweetsByTerm.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>);

  return(
    <div>
      {
        !props.currentTweet ?
          <React.Fragment>{tweetCards}</React.Fragment>
            :
          <React.Fragment>
            <Tweet
              key={props.currentTweet.id}
              tweet={props.currentTweet}>
            </Tweet>
          </React.Fragment>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    searchTerm: state.searchTerm,
    currentTweet: state.currentTweet
  };
}

export default connect(mapStateToProps)(TweetCollection);
