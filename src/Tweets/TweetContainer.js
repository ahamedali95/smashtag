import React, { Component } from "react";
import SearchBar from "./SearchBar.js";

class TweetContainer extends Component {
  constructor() {
    super();
  }

  handleChange(event, { value }) {
    debugger
  }

  render() {
    return(
      <div>
        <SearchBar handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default TweetContainer;
