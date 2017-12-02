import React, { Component } from "react";
import CreateJob from "../../components/Create/CreateJob";
import "./Create.css";
import API from "../../utils/API";

class Create extends Component {
  login() {
    this.props.auth.login();
  }

  constructor(props) {
    super(props);

    this.state = {
      jobDate: "",
      crewName: "",
      crewMembers: "",
      jobName: "",
      custPhone: "",
      custAddress: "",
      custCity: "",
      custState: "",
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

    // create the string used in the google maps href
    let linkStreet = this.state.custAddress.replace(/\s|\.|,|-/g, "+");
    let linkCity = this.state.custCity.replace(/\s|\.|,|-/g, "+");
    let linkAddress = linkStreet + "+" + linkCity + "+" + this.state.custState;
    console.log("this is linkAddress: " + linkAddress);

    ///create the string used in the to display the address
    let displayAddress = this.state.custAddress + ", " + this.state.custCity + ", " + this.state.custState

    let newJob = {
      jobDate: this.state.jobDate,
      crewName: this.state.crewName,
      crewMembers: this.state.crewMembers,
      jobName: this.state.jobName,
      custPhone: this.state.custPhone,
      custAddress: displayAddress,
      linkAddress: linkAddress,
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
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container text-center">
        {isAuthenticated() && (
          <div>
            <div className="nav-div">
              <a href="/manager/" className="btn btn-brown">
                Back
              </a>
              <a href="/manager/search/" className="btn btn-brown">
                Search Jobs
              </a>
              <a href="/crew/" className="btn btn-brown">
                Crew Page
              </a>
            </div>
            <h1 className="page-title-text">Create Job</h1>
            <br />
            <br />
            <CreateJob
              crews={this.state.crews}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              addCrew={this.addCrew}
            />
          </div>
        )}
        {!isAuthenticated() && (
          <h4 className="page-title-text">
            You are not logged in! Please{" "}
            <a style={{ cursor: "pointer" }} onClick={this.login.bind(this)}>
              Log In
            </a>{" "}
            to continue.
          </h4>
        )}        
      </div>
    );
  }
} //end class

export default Create;
