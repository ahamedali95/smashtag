import React, { Component } from "react";
import { Search } from 'semantic-ui-react';
import { connect } from "react-redux";

const SearchBar = (props) => {
  return(
    <Search onSearchChange={(event, { value }) => props.handleChange(event, { value })}/>
  );
}

export default connect()(SearchBar);
