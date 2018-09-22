import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react';

class InputField extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    }
  }

  handleSubmit(event) {
    debugger
  }

  render() {
    return(
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <Form.Field>
          <input value={this.state.content} type="text" placeholder="What's happening?" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default InputField;
