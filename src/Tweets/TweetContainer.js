import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import TweetCollection from "./TweetCollection.js"
import { connect } from "react-redux";
import { setTweetsAndUsers } from "../actions/actions.js";

class TweetContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3001/api/v1/tweets"),
      fetch("http://localhost:3001/api/v1/users"),
    ])
    .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
    .then(([tweets, users]) => this.props.setTweetsAndUsers(tweets, users));
  }

  render() {
    return(
      <div>
        <SearchBar/>
        <TweetCollection />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTweetsAndUsers: (tweets, users) => {
      dispatch(setTweetsAndUsers(tweets, users));
    }
  };
}

export default connect(null, mapDispatchToProps)(TweetContainer);
