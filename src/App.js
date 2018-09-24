import React, { Component } from 'react';
import './App.css';
import TweetContainer from "./Tweets/TweetContainer.js";
import MenuBar from "./menu/Menu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MenuBar/>
        <TweetContainer/>
      </div>
    );
  }
}

export default App;
