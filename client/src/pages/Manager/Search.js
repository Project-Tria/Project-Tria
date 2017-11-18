import React, { Component } from "react";
import SearchInput from "../../components/Search/SearchInput";
import Results from "../../components/Results/Results";
import API from "../../utils/API";

class Search extends Component {
  //constructor
  constructor (props) {
    super(props)

    this.state = {
      crewName: "",
      startDate: "",
      endDate: "",
      jobName: "",
      jobs: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadJobs = this.loadJobs.bind(this);
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
  
  


///should take parameters from the searchinput to use in the query
//bind this in the constructor
  loadJobs = (crewQuery) => {
    API.getJobByCrewName(crewQuery)
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({ jobs: res.data }, () => {
          console.log("This.state.jobs from Results.js", this.state.jobs);
        });
      })
      .catch(err => console.log(err));
  };



//this.state.{key} is set as parameters used in load jobs
  handleFormSubmit = event => {
    let crewQuery = this.state.crewName;
    // event.preventDefault();
    // alert("Form Submitted");
    this.loadJobs(crewQuery);
  };

  render() {
    return (
      <div className="container text-center">
        <h1>Search Jobs</h1>
        <br />
        <a href="/manager/" className="btn btn-info">
          Back
        </a>
        <br />
        <SearchInput handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}/>
        <br />
        <br />
        <Results jobs={this.state.jobs} />
        <br />
        <br />
      </div>
    );
  }
} //end class

export default Search;
