import React, { Component } from "react";

class Results extends Component {
  renderJobs = props => {
    // if (this.props.jobs.length === 0) {
    //   return <h3> No Jobs found! </h3>;
    // }
    //   <div className="col">
    //   <p>{job.crewName}</p>
    // </div>
    // <div className="col">
    //   <p>{job.custAddress}</p>
    // </div>
    // <div className="col">
    //   <p>{job.jobDate}</p>
    // </div>
    // <div className="col">
    //   <p>{job.completed.toString()}</p>
    // </div>
    
    return this.props.jobs.map(job => (
      <div className="container border border-warning">
        <div className="row">
          <div className="col-10">
            <div className="row">
              <div className="col">
                <p>Job Date: {job.jobDate}</p>
              </div>
              <div className="col">
                <p>Job Name: {job.jobName}</p>
              </div>
              <div className="col">
                <p>Crew: {job.crewName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Customer Phone:{" "}
                  <a href={"tel:" + job.custPhone}>{job.custPhone}</a>
                </p>
              </div>
              <div className="col">
                <p>
                  Customer Address:{" "}
                  <a
                    target="_blank"
                    href={
                      "https://www.google.com/maps?daddr=" + job.linkAddress
                    }
                  >
                    {job.custAddress}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-2" id="status">
          {if (job.completed){
            <div className="border border-rounded complete-job">
              <p>Complete</p>
            </div>
          }}
            <p>{job.completed.toString()}</p>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="text-center container">
        <h3>Search Results</h3>
        <div className="container">{this.renderJobs()}</div>
      </div>
    ); //end return
  } //end render
} ///end Search

export default Results;
