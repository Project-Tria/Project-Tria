import React, { Component } from "react";


class ManagerMain extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container text-center">
        {isAuthenticated() && (
          <div>
            <h1>Welcome to Manager - Main</h1>
            <br />
            <a href="/" className="btn btn-info">
              Back
            </a>
            <br />
            <br />
            <a href="/manager/create/" className="btn btn-lg btn-primary">
              Create Job
            </a>
            <br />
            <br />
            <a href="/manager/search/" className="btn btn-lg btn-primary">
              Search Jobs
            </a>
          </div>
        )}
        {!isAuthenticated() && (
          <h4>
            You are not logged in! Please{" "}
            <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
              Log In
            </a>{" "}
            to continue.
          </h4>
        )}        
      </div>
    );
      
  }
} //end class

export default ManagerMain;
