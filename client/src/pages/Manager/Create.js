import React, { Component } from "react";
import CreateJob from "../../components/Create/CreateJob"

import API from "../../utils/API";




class Create extends Component {

  state ={
    jobs:[]
  }

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({ jobs: res.data }, ()=> {
          console.log("This.state.jobs", this.state.jobs)
        });
      })
      .catch(err => console.log(err));
  };
  // this.setState({
  //   jobs: res.data,
  //   crewName: "",
  //   jobName: "",
  //   custNumber: "",
  //   custAddress: "",
  //   estimatedJobTime: "",
  //   jobDescription: ""
  // })



  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to Manager - Create</h1>
        <br />
        <a href="/manager/" className="btn btn-info">Back</a>
        <br />
        <br />
        <CreateJob />
      </div>
    );
  }
} //end class

export default Create;