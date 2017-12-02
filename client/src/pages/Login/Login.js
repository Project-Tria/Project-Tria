import React, { Component } from "react";
import "./Login.css";

{
  /* <div className="login-div">
<h4>
  You are not logged in! Please{" "}
  <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
    Log In
  </a>{" "}
  to continue.
  </h4>
</div> */
}

class Login extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container text-center">
        {isAuthenticated() && (
          <div>
            <h1 className="page-title-text">Welcome to login</h1>
            <a href="/manager/" className="btn btn-lg btn-primary">
              Manager Main
            </a>
            <br />
            <br />
            <a href="/crew/" className="btn btn-lg btn-primary">
              Crew Main
            </a>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        )}
        {!isAuthenticated() && (
          <div className="login-div">
            <h1 id="main-title">Welcome to Crewify!</h1>
            <br />
            <br />
            <button
              className="btn btn-lg login-button"
              style={{ cursor: "pointer" }}
              onClick={this.login.bind(this)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
} //end class

export default Login;
