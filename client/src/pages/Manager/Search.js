import React, { Component } from "react";
import SearchInput from "../../components/Search/SearchInput";
import Results from "../../components/Results/Results";
import API from "../../utils/API";

class Search extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      // .then(res => console.log(res.data))
      .then(res => {
        this.setState({ jobs: res.data }, () => {
          console.log("This.state.jobs from Results.js", this.state.jobs);
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
        <h1>Search Jobs</h1>
        <br />
        <a href="/manager/" className="btn btn-info">
          Back
        </a>
        <br />
        <SearchInput />
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
