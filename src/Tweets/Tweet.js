import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon, Button } from 'semantic-ui-react';
import { setCurrentTweet, removeCurrentTweet } from "../actions/actions.js";
// import Moment from 'react-moment';
import TimeAgo from 'timeago-react';

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
            {
              !!props.currentTweet ?
                <Feed.Date><TimeAgo datetime={props.tweet.created_at} locale='us' /></Feed.Date>
                :
                null
            }
          </Feed.Meta>
          <div>
          {
            !!props.currentTweet ?
              <Button icon onClick={(event) => props.removeCurrentTweet()}>
                <Icon name="backward" />
              </Button>
              :
              null
          }
          </div>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentTweet: state.currentTweet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentTweet: (tweet) => {
      dispatch(setCurrentTweet(tweet));
    },
    removeCurrentTweet: () => {
      dispatch(removeCurrentTweet());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
