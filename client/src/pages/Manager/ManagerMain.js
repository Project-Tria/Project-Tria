import React, { Component } from "react";

class ManagerMain extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to Manager - Main</h1>
        <br />
        <a href="/" className="btn btn-info">Back</a>
        <br />
        <br />
        <a href="/manager/create/" className="btn btn-lg btn-primary">Create Job</a>
        <br />
        <br />
        <a href="/manager/search/" className="btn btn-lg btn-primary">Search Jobs</a>
      </div>
    );
  }
} //end class

export default ManagerMain;