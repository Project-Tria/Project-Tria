import React, { Component } from "react";
import MyJobs from "../../components/Jobs/MyJobs";
//should crew main only display job for the current date?

class CrewMain extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>Today's Jobs</h1>
        <br />
        <a href="/" className="btn btn-info">Back</a>
        <br />
        <br />
        <MyJobs />
      </div>
    );
  }
} //end class login

export default CrewMain;
