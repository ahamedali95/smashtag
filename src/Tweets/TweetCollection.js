import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet.js";

const TweetCollection = (props) => {
  //console.log("inside tweetcollection", props);
  const tweets = props.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>);

  return(
    <div>{tweets}</div>
  );
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

export default connect(mapStateToProps)(TweetCollection);
