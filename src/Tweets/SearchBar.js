import React, { Component } from "react";
import { Search } from 'semantic-ui-react';

const SearchBar = (props) => {
  return(
    <Search onSearchChange={(event, { value }) => props.handleChange(event, { value })}/>
  );
}

export default SearchBar;
