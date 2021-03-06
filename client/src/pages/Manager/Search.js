import React, { Component } from "react";
import SearchInput from "../../components/Search/SearchInput";
import Results from "../../components/Results/Results";
import API from "../../utils/API";
import "./Search.css";


class Search extends Component {
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  clearForm() {
    this.setState({
      crewName: "",
      startDate: "",
      endDate: "",
      jobName: ""
    });
  }

  //constructor
  constructor(props) {
    super(props);

    this.state = {
      crewName: "",
      startDate: "",
      endDate: "",
      jobName: "",
      jobs: [],
      crews: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadJobs = this.loadJobs.bind(this);
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

  filterDate = () => {
    const start = this.state.startDate;
    const end = this.state.endDate;

    let jobsCopy = this.state.jobs;

    let newOne = jobsCopy.filter(
      jobCopy => (jobCopy.jobDate >= start && jobCopy.jobDate <= end) === true
    );
    this.setState({
      jobs: newOne
    });
    this.clearForm();
  };


  loadJobs = crewQuery => {
    API.getJobByCrewName(crewQuery)
      .then(res => {
        this.setState({ jobs: res.data }, () => {
          this.filterDate();
        });
      })
      .catch(err => console.log(err));
  };

  //This will load all of the jobs of all the crews
  loadAllCrewsJobs = () => {
    API.getJobs()
      .then(res => {
        this.setState({ jobs: res.data });
      })
      .catch(err => console.log(err));
  };

  loadCrews = () => {
    API.getCrews()
      .then(res => {
        this.setState({ crews: res.data });
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    let crewQuery = this.state.crewName;
    if (crewQuery === "Search All Crews") {
      this.loadAllCrewsJobs();
      
    } else {
      this.loadJobs(crewQuery);
      
    }
    
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container text-center ">
        {isAuthenticated() && (
          <div>
            <div className="nav-div">
              <a href="/manager/create/" className="btn btn-brown navigation">
                <i className="glyphicon glyphicon-pencil" />
                <span className="button-text"> Create Job</span>
              </a>
              <a href="/crew/" className="btn btn-brown navigation">
                <i className="glyphicon glyphicon-inbox" />
                <span className="button-text"> Crew Page</span>
              </a>
              <a
                href="#"
                className="btn btn-brown navigation"
                onClick={this.login.bind(this)}
              >
                <i className="glyphicon glyphicon-log-out" />
                <span className="button-text"> Log Out</span>
              </a>
            </div>
            <h1 className="page-title-text">Search Jobs</h1>
            <br />
            <br />
            <SearchInput
              crews={this.state.crews}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              {...this.state}
            />
            <br />
            <br />
            <Results jobs={this.state.jobs} />
            <br />
            <br />
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
} //end class

export default Search;
