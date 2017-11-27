import React, { Component } from "react";

/*
ADDRESS - we can create a link to google maps by wrapping the address in a link and having the href be https://www.google.com/maps?addr=[custAddress]

PHONE - <a href="tel:1-408-555-5555">1-408-555-5555</a> iOS

use props._id to dynamically change the id=headingOne to id=heading+{props._id}
*/

class UpdateJob extends Component {
  renderUpdateJob = props => {
    return this.props.jobs.map(job => (
      <div className="card" key={job._id}>
        <div className="card-header" role="tab" id={"heading" + job._id}>
          <h3 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse" + job._id}
              aria-expanded="true"
              aria-controls={"collapse" + job._id}
            >
              {job.jobName}
            </a>
          </h3>
          <p> {job.custAddress}</p>
        </div>

        <div
          id={"collapse" + job._id}
          className="collapse"
          role="tabpanel"
          aria-labelledby={"heading" + job._id}
        >
          <div className="card-block text-left">
            <div className="container text-center border">
              <div className="form-group row">
                <label
                  htmlFor="date-input"
                  className=" col-form-label text-right"
                >
                  Job Date:
                </label>
                <input
                  className="col-3 form-control"
                  type="date"
                  id="date-input"
                  name="jobDate"
                  value={this.props.jobDate}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              {/*<div className="form-group row">
                <label
                  htmlFor="crew-dropdown"
                  className=" col-form-label text-right"
                >
                  Select Crew:
                </label>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="crew-dropdown"
                    name="crewName"
                    value={this.props.crewName}
                    onChange={event => {
                      this.props.handleInputChange(event);
                    }}
                  >
                    <option>Select a crew</option>
                    {this.renderCrew()}
                  </select>
                </div>
                <span>&nbsp;</span>*/}

              <div className="form-group row">
                <label htmlFor="job-crew" className="col-form-label">
                  Job Crew:{""}
                </label>
                <input
                  className="col-3 form-control"
                  type="text"
                  placeholder={job.crewMembers}
                  id="job-crew"
                  name="crewMembers"
                  value={this.props.crewMembers}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <div className="form-group row">
                <label htmlFor="job-name" className="col-form-label">
                  Job Name:{""}
                </label>
                <input
                  className="col-3 form-control"
                  type="text"
                  placeholder={job.jobName}
                  id="job-name"
                  name="jobName"
                  value={this.props.jobName}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <div className="form-group row">
                <label htmlFor="cust-phone" className="col-2 col-form-label">
                  Telephone:{""}
                </label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder={job.custPhone}
                  name="custPhone"
                  id="cust-phone"
                  value={this.props.custPhone}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <div className="form-group row">
                <label htmlFor="cust-address" className="col-form-label">
                  Job Address:{""}
                </label>
                <input
                  className="col-3 form-control"
                  type="text"
                  placeholder={job.custAddress}
                  id="cust-address"
                  name="custAddress"
                  value={this.props.custAddress}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <div className="form-group row">
                <label htmlFor="job-descrip">Job Notes</label>
                <textarea
                  className="form-control"
                  placeholder={job.jobDescription}
                  name="jobDescription"
                  id="job-descrip"
                  rows="3"
                  value={this.props.jobDescription}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <div className="form-group row">
                <label htmlFor="est-hours" className="col-2 col-form-label">
                  Estimated Job Time
                </label>
                <input
                  className="form-control"
                  placeholder={job.estimatedJobTime}
                  type="number"
                  name="estimatedJobTime"
                  id="est-hours"
                  value={this.props.estimatedJobTime}
                  onChange={event => {
                    this.props.handleInputChange(event);
                  }}
                />
              </div>

              <button
                name="_id"
                value={job._id}
                onClick={event => {
                  this.props.handleFormSubmit(event);
                }}
                type="submit"
                className="btn btn-lg btn-primary"
              >
                Update Job
              </button>

              {/* <FormBtn onClick={this.handleFormSubmit}>Submit Job</FormBtn> */}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        {this.renderUpdateJob()}
      </div>
    ); //end return
  } //end render
} //end UpdateJob

export default UpdateJob;
