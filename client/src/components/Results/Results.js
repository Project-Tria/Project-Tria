import React, { Component } from "react";
import "./Results.css"
class Results extends Component {
  renderJobs = props => {

    return this.props.jobs.map(job => (
      <div className="container border border-warning" key={job._id}>
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
            {job.completed
            ? <div className="border border-rounded complete-job"><p>Complete</p></div>
            : <div className="border border-rounded open-job"><p>Open</p></div>}
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
