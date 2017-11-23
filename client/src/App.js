import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
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
  <Jumbotron>
    <img src="http://www.whymonster.com/images/Logo.png" alt="Company Logo" />
    <br />
    <br />
    <p><span style={{ fontSize:12 }}><i>powered by </i></span>Crewify</p>
        {
              !isAuthenticated() && (
                  <h1>Logged In</h1>
                )
            }
            {
              isAuthenticated() && (
                 <h1>Logged Out</h1>
                )
            }
  </Jumbotron>

</div>
)
    }

}

export default App;
