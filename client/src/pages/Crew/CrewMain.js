import React, { Component } from "react";
import MyJobs from "../../components/Jobs/MyJobs";
//should crew main only display job for the current date?

class CrewMain extends Component {
  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  render() {
    return (
      <div className="container text-center">
        <h1>My Jobs - {this.getDate()}</h1>
        <br />
        <a href="/" className="btn btn-info">
          Back
        </a>
        <br />
        <br />
        <MyJobs />
      </div>
    );
  }
} //end class login

export default CrewMain;
