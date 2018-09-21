import React, { Component } from "react";
import { connect } from "react-redux";
import { Feed, Icon } from 'semantic-ui-react';

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
        <Feed.Extra text>{props.tweet.content}</Feed.Extra>
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

export default connect(mapStateToProps)(Tweet);
