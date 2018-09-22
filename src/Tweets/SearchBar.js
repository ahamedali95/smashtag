import React, { Component } from "react";
import { Search } from 'semantic-ui-react';
import { connect } from "react-redux";
import { updateSearchTerm } from "../actions/actions.js";

const SearchBar = (props) => {
  console.log("inside searchbar", props)
  return(
    <Search
      value={props.searchTerm}
      placeholder="Search Twitter"
      onSearchChange={(event => props.updateSearchTerm(event.target.value))}
    />
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
