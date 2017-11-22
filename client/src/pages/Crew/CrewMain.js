import React, { Component } from "react";
import API from "../../utils/API";
import MyJobs from "../../components/Jobs/MyJobs";
//should crew main only display job for the current date?

class CrewMain extends Component {
  constructor (props) {
    super(props)

    this.state = {
      actualJobTime: "",
      jobNotes: "",
      completed: "",
      jobs:[]
    }
  }

  componentDidMount(){
    this.getJobs()
  }
  
  getJobs(){
    API.getJobs()
    .then(res => {
      this.setState({ jobs: res.data }, () => {
        console.log("This.state.jobs from CrewMain.js", this.state.jobs);
        // this.filterDate();
      });
    })
    .catch(err => console.log(err));
  }


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
        <MyJobs jobs={this.state.jobs}/>
      </div>
    );
  }
} //end class login

export default CrewMain;
