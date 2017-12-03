import React, { Component } from "react";
import "./MyJobs.css";

class MyJobs extends Component {
  renderMyJobs = props => {
    return this.props.jobs.map(job => (
      <div className="card" key={job._id} id="card-div">
        <div className="card-header" role="tab" id={"heading" + job._id}>
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={"#collapse" + job._id}
            aria-expanded="true"
            aria-controls={"collapse" + job._id}
          >
            <h3>{job.jobName}</h3>
          </a>
          <br />
          <div className="link-div">
            <a
              target="_blank"
              href={"https://www.google.com/maps?daddr=" + job.linkAddress}
            >
              {job.custAddress}
            </a>
          </div>
          <p className="crew-name">
            <b>Job Crew: </b>
            {job.crewName}
          </p>
        </div>

        <div
          id={"collapse" + job._id}
          className="collapse"
          role="tabpanel"
          aria-labelledby={"heading" + job._id}
        >
          <div className="card-block text-left">
            <div className="row job-row">
              <div className="job-details col-md-4 col-sm-12">
                <div className="row">
                  <p className="mj-heading">
                    <b>Crew Members: </b>
                  </p>
                </div>
                <div className="row">
                  <p className="mj-details">{job.crewMembers}</p>
                </div>
                <div className="row">
                  <p className="mj-heading">
                    <b>Cust. Phone: </b>
                  </p>
                </div>
                <div className="row">
                  <a className="mj-details" href={"tel:" + job.custPhone}>
                    {job.custPhone}
                  </a>
                </div>
                <div className="row">
                  <p className="mj-heading mj-notes">
                    <b>Job Notes: </b>
                  </p>
                </div>
                <div className="row">
                  <p className="mj-details">{job.jobDescription}</p>
                </div>
              </div>
              <div className="crew-form col-md-4 col-sm-12">
                <div className="crew-form-fields">
                  <label htmlFor="job-notes">Crew Notes:</label>
                  <textarea
                    className="form-control"
                    name="jobNotes"
                    id="job-notes"
                    rows="3"
                    value={this.props.jobNotes}
                    onChange={event => {
                      this.props.handleInputChange(event);
                    }}
                  />

                  <label htmlFor="act-hours" className="col col-form-label">
                    Job Hours:
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="actualJobTime"
                    id="act-hours"
                    value={this.props.actualJobTime}
                    onChange={event => {
                      this.props.handleInputChange(event);
                    }}
                  />
                </div>
              </div>

              <div className="crew-form-button col-md-3 col-sm-12 text-center">
                <button
                  id="complete-btn"
                  name="_id"
                  value={job._id}
                  onClick={event => {
                    this.props.handleFormSubmit(event);
                  }}
                  type="submit"
                  className="btn btn-lg btn-danger align-middle"
                >
                  Complete Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }; //end renderMyJobs

  render() {
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        {this.renderMyJobs()}
      </div>
    ); //end return
  } //end render
} //end MyJobs

export default MyJobs;
