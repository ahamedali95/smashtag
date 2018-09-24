import React, { Component } from "react";
import { Menu, Search } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateSearchTerm } from "../actions/actions.js";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItem: null
    };
  }

  handleClick = (event, { name }) => {
    this.setState({
      menuItem: name
    });
  }

  render() {
    return(
      <Menu>
        <Menu.Item

          name="home"
          active={this.state.menuItem === "home"}
          onClick={(event, { name }) => this.handleClick(event, { name })}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="tweet"
          active={this.state.menuItem === "tweet"}
          onClick={(event, { name }) => this.handleClick(event, { name })}
        >
          Tweet
        </Menu.Item>

        <Menu.Item position="right">
          <Search
            value={this.props.searchTerm}
            placeholder="Search Twitter"
            onSearchChange={(event => this.props.updateSearchTerm(event.target.value))}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchTerm: (searchTerm) => {
      dispatch(updateSearchTerm(searchTerm));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
