import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';
import { connect } from "react-redux";
import { updateTweets } from "../actions/actions.js";

class InputField extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    }
  }

  handleSubmit(event) {
    const body = {
      content: this.state.content,
      user_id: 1
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    fetch("http://localhost:3001/api/v1/tweets", config)
      .then(response => response.json())
      .then(data => this.resetFormAndUpdateTweets(data));
  }

  resetFormAndUpdateTweets(tweet) {
    this.setState({
      content: ""
    }, () => {
      const newTweets = [tweet, ...this.props.tweets];

      this.props.updateTweets(newTweets);
    });
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    }, () => console.log(this.state.content))
  }

  render() {
    console.log("inside inputfield", this.props)
    return(
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <Form.Field>
          <input onChange={(event) => this.handleChange(event)} value={this.state.content} type="text" placeholder="What's happening?" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTweets: (tweets) => {
      dispatch(updateTweets(tweets));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
