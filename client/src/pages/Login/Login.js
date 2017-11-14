import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to login</h1>
        <a href="/manager/" className="btn btn-lg btn-primary">Manager Main</a>
        <br />
        <br />
        <a href="/crew/" className="btn btn-lg btn-primary">Crew Main</a>
      </div>
    );
  }
} //end class

export default Login;
