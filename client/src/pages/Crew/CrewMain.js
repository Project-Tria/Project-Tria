import React, { Component } from "react";
import API from "../../utils/API";
import MyJobs from "../../components/Jobs/MyJobs";
import "./CrewMain.css";

//should crew main only display job for the current date?

class CrewMain extends Component {
  login() {
    this.props.auth.login();
  }

  constructor(props) {
    super(props);

    this.state = {
      actualJobTime: "",
      jobNotes: "",
      completed: "",
      _id: "",
      jobs: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getJobs();
  }

  handleInputChange = event => {
    console.log("This is the event ", event);
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    console.log("This is the name from the handleinputchange", name);

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("This is the event target ", event.target.value);

    let jobData = {
      actualJobTime: this.state.actualJobTime,
      jobNotes: this.state.jobNotes,
      completed: true
    };

    console.log("This is the job you just completed: ", jobData);

    let id = event.target.value;

    console.log("This is the id you just completed: ", id);

    API.updateJob(id, jobData)
      // .then(res => this.loadJobs())
      .then(res => this.getJobs())
      .catch(err => console.log(err));
  };

  getJobs() {
    API.findOpenJobs()
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
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container text-center">
        {isAuthenticated() && (
          <div>
            <a href="/" className="btn btn-brown">
              Back
            </a>
            <a href="/manager/create/" className="btn btn-brown nav-button">
              Create Job
            </a>
            <a href="/manager/search/" className="btn btn-brown nav-button">
              Search Jobs
            </a>
            <h1 className="page-title-text">Open Jobs: {this.getDate()}</h1>
            <br />
            <br />
            {this.state.jobs.length === 0 && (
              <h3>
                <i>All Jobs Complete!</i>
              </h3>
            )}
            <MyJobs
              jobs={this.state.jobs}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
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
} //end class login

export default CrewMain;
