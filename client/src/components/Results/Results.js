import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  renderJobs = props => {
    return this.props.jobs.map(job => (
      <div className="card" key={job._id}>
        <div className="card-header" role="tab" id={"heading" + job._id}>
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#collapse" + job._id}
            aria-expanded="true"
            aria-controls={"collapse" + job._id}
          >
            <div className="row">
              <div className="col">
                <p>
                  <b>Job Date: </b>
                  {job.jobDate}
                </p>
              </div>
              <div className="col">
                <p>
                  <b>Job Type/Cust.: </b>
                  {job.jobName}
                </p>
              </div>
              <div className="col">
                {job.completed ? (
                  <div className="border border-rounded complete-job">
                    <p className="is-complete">Complete</p>
                  </div>
                ) : (
                  <div className="border border-rounded open-job">
                    <p className="is-complete">Open</p>
                  </div>
                )}
              </div>
            </div>
          </a>
        </div>

        <div
          id={"collapse" + job._id}
          className="collapse"
          role="tabpanel"
          aria-labelledby={"heading" + job._id}
        >
          <div className="card-block text-left">
            <div className="row">
              <div className="col cust-details border border-secondary">
                <p className="text-center column-title">Cust. Details</p>
                <div className="row">
                  <p className="heading">
                    <b>Cust. Address: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <a
                    target="_blank"
                    href={
                      "https://www.google.com/maps?daddr=" + job.linkAddress
                    }
                  >
                    {job.custAddress}
                  </a>
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Cust. Phone: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <a href={"tel:" + job.custPhone}>{job.custPhone}</a>
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Job Notes: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <p className="job-data">{job.jobDescription}</p>
                </div>
              </div>
              <div className="col crew-details border border-secondary">
                <p className="text-center column-title">Crew Details</p>
                <div className="row">
                  <p className="heading">
                    <b>Crew Name: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <p className="job-data">{job.crewName}</p>
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Crew Members: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <p className="job-data">{job.crewMembers}</p>
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Completion Notes: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  {job.jobNotes ? (
                    <div>
                      <p className="job-data">{job.jobNotes}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="job-data">N/A</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="col crew-stats border border-secondary">
                <p className="text-center column-title">Job Details</p>
                <div className="row">
                  <p className="heading">
                    <b>Est. Job Time: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  <p className="job-data">{job.estimatedJobTime}</p>
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Actual Job Time: </b>{" "}
                  </p>
                </div>
                <div className="row">
                  {job.actualJobTime ? (
                    <div>
                      <p className="job-data">{job.actualJobTime}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="job-data">N/A</p>
                    </div>
                  )}
                </div>
                <div className="row">
                  <p className="heading">
                    <b>Completion Ratio: </b>{" "}
                  </p>
                </div>
                {job.actualJobTime ? (
                  <div className="row">
                    {job.estimatedJobTime - job.actualJobTime < 0 ? (
                      <div className="bad-ratio rounded-circle">
                        {" "}
                        <p className="ratio-result">
                          {job.estimatedJobTime - job.actualJobTime}
                        </p>
                      </div>
                    ) : (
                      <div className="good-ratio rounded-circle">
                        {" "}
                        <p className="ratio-result">
                          {job.estimatedJobTime - job.actualJobTime}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="row">
                    <p className="job-data">N/A</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }; //end renderJobs

  render() {
    return (
      <div className="text-center container background-region">
        <h3>Search Results</h3>
        <div id="accordion" role="tablist" aria-multiselectable="true">
          {this.renderJobs()}
        </div>
      </div>
    ); //end return
  } //end render
} ///end Search

export default Results;
