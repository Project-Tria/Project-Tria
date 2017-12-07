
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (

          <div>
          {!isAuthenticated() && <h1>Logged In</h1>}
          {isAuthenticated() && <h1>Logged Out</h1>}
          </div>

    );
  }
}

export default App;
