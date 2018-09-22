import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet.js";

const TweetCollection = (props) => {
  //console.log("inside tweetcollection", props);
  const filteredTweetsByTerm = props.tweets.filter(tweet => tweet.content.indexOf(props.searchTerm) !== -1);
  const tweetCards = filteredTweetsByTerm.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>);

  return(
    <div>{tweetCards}</div>
  );
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(TweetCollection);
