import React, { Component } from "react";
import SearchInput from "../../components/Search/SearchInput";
import Results from "../../components/Results/Results";
import API from "../../utils/API";
// import Footer from "../../components/Footer/Footer";
import "./Search.css";
// import Moment from 'moment';
// import { extendMoment } from 'moment-range';

//  const moment = extendMoment(Moment);

// {this.state.jobs.length === 0 && (
//   <h3>
//     <i>Search to display results.</i>
//   </h3>
// )}

class Search extends Component {
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
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
    // this.loadCrews = this.loadCrews.bind(this);
  }

  componentDidMount() {
    this.loadCrews();
  }

  //component did mount to load getCrews()

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
    // const range = moment().range(start, end);

    console.log(start);

    let jobsCopy = this.state.jobs;
    // let jobsCopyDate = this.state.jobs.jobDate
    console.log("This is the jobs copy", jobsCopy);

    let newOne = jobsCopy.filter(
      jobCopy => (jobCopy.jobDate >= start && jobCopy.jobDate <= end) === true
    );
    console.log("This is the jobs copy after filter", newOne);
    this.setState({
      jobs: newOne
    });
  };

  ///should take parameters from the searchinput to use in the query
  //bind this in the constructor
  loadJobs = crewQuery => {
    API.getJobByCrewName(crewQuery)
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({ jobs: res.data }, () => {
          console.log("This.state.jobs from Results.js", this.state.jobs);
          this.filterDate();
        });
      })
      .catch(err => console.log(err));
  };

  //This will load all of the jobs of all the crews
  loadAllCrewsJobs = () => {
    API.getJobs()
      .then(res => {
        this.setState({ jobs: res.data }, () => {
          console.log("This.state.jobs", this.state.jobs);
        });
      })
      .catch(err => console.log(err));
  };

  //this funciton is going to get crews from the DB will be
  //props for the drop down.
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

  //this.state.{key} is set as parameters used in load jobs
  handleFormSubmit = event => {
    let crewQuery = this.state.crewName;
    if (crewQuery === "Search All Crews") {
      this.loadAllCrewsJobs();
    } else {
      // event.preventDefault();
      // alert("Form Submitted");
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
                <i className="glyphicon glyphicon-pencil"></i><span className="button-text"> Create Job</span>
              </a>
              <a href="/crew/" className="btn btn-brown navigation"><i className="glyphicon glyphicon-inbox"></i>
              <span className="button-text"> Crew Page</span>
              </a>
              <a href="#" className="btn btn-brown navigation" onClick={this.login.bind(this)}><i className="glyphicon glyphicon-log-out"></i>
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
          <br />
          <br />
          <br />
      </div>
    );
  }
} //end class

export default Search;
