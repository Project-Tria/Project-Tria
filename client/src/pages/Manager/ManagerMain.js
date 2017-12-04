import React, { Component } from "react";
import "./ManagerMain.css";


class ManagerMain extends Component {
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return <div className="container text-center">
        {isAuthenticated() && <div>
            <h1 className="page-title-text">Manager - Main Menu</h1>
            <br />
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
            <a href="#" className="btn btn-brown nav-button" onClick={this.login.bind(this)}>
              Log Out
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
            </div>
          </div>}
        {!isAuthenticated() && <h4 className="page-title-text">
            You are not logged in! Please <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
              Log In
            </a> to continue.
          </h4>}      
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
      
      </div>;
      
  }
} //end class

export default ManagerMain;
