import React, { Component } from "react";
import SearchInput from "../../components/Search/SearchInput"

class Search extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to Manager - Search</h1>
        <br />
        <a href="/manager/" className="btn btn-info">Back</a>
        <br />
        <SearchInput />
        </div>
    );
  }
} //end class

export default Search;