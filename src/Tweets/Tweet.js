import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon } from 'semantic-ui-react';
import { setCurrentTweet } from "../actions/actions.js";

const Tweet = (props) => {
  console.log("inside tweet", props)
  const user = props.users.find(user => {
    return user.id === props.tweet.user_id;
  });

  return (
    <Feed size="large">
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{`${user.first_name} ${user.last_name} @${user.username}`}</Feed.User>
          </Feed.Summary>
        <Feed.Extra text onClick={(event) => props.setCurrentTweet(props.tweet)}>{props.tweet.content}</Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' color="red"/>
                0 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentTweet: (tweet) => {
      dispatch(setCurrentTweet(tweet));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
