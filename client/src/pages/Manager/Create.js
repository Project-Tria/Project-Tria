import React, { Component } from "react";
import CreateJob from "../../components/Create/CreateJob";

import API from "../../utils/API";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobDate: "",
      crewName: "",
      crewMembers: "",
      jobName: "",
      custPhone: "",
      custAddress: "",
      jobDescription: "",
      estimatedJobTime: "",
      crewNameDB: "",
      jobs: [],
      crews: []
    };
  }

  componentDidMount() {
    this.loadCrews();
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    event.preventDefault();
    // if (
    //   this.state.crewName &&
    //   this.state.jobName &&
    //   this.state.custPhone &&
    //   this.state.custAddress &&
    //   this.state.estimatedJobTime &&
    //   this.state.jobDescription
    // )
    // {
    let newJob = {
      jobDate: this.state.jobDate,
      crewName: this.state.crewName,
      crewMembers: this.state.crewMembers,
      jobName: this.state.jobName,
      custPhone: this.state.custPhone,
      custAddress: this.state.custAddress,
      estimatedJobTime: this.state.estimatedJobTime,
      jobDescription: this.state.jobDescription
    };
    console.log("This is the job you just created: ", newJob);

    API.saveJob(newJob)
      // .then(res => this.loadJobs())
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // }
  };

  loadCrews = () => {
    API.getCrews()
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({ crews: res.data }, () => {
          console.log("This.state.crews", this.state.crews);
        });
      })
      .catch(err => console.log(err));
  };

  addCrew = () => {
    API.saveCrew({
      crewNameDB: this.state.crewNameDB
    })
      .then(res => this.loadCrews())
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to Manager - Create</h1>
        <br />
        <a href="/manager/" className="btn btn-info">
          Back
        </a>
        <br />
        <br />
        <CreateJob
          crews={this.state.crews}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          addCrew={this.addCrew}
        />
        <br />
        <br />
      </div>
    );
  }
} //end class

export default Create;
