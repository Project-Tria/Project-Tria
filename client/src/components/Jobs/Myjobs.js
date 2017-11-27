import React, { Component } from "react";
import "./MyJobs.css"
/*
ADDRESS - we can create a link to google maps by wrapping the address in a link and having the href be https://www.google.com/maps?addr=[custAddress]

PHONE - <a href="tel:1-408-555-5555">1-408-555-5555</a> iOS

use props._id to dynamically change the id=headingOne to id=heading+{props._id}
*/

class MyJobs extends Component {
  renderMyJobs = (props) => {

    return(
      this.props.jobs.map(job =>(
        <div className="card" key={job._id}>
        <div className="card-header" role="tab" id={"heading"+job._id}>
          <h3 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href={"#collapse"+job._id}
              aria-expanded="true"
              aria-controls={"collapse"+job._id}
            >
              {job.jobName}
            </a>
          </h3>
          <br />
          <p> {job.custAddress}</p>
          <p><b>Job Crew: </b>{job.crewName}</p>
        </div>

        <div
          id={"collapse"+job._id}
          className="collapse"
          role="tabpanel"
          aria-labelledby={"heading"+job._id}
        >
    
          <div className="card-block text-left">
            <div className="row job-row">
              <div className="col">
                <p>
                  <b>Crew Members: </b> <span>{job.crewMembers}</span>
                </p>
                <p>
                <b>Cust. Phone: </b><a href={"tel:"+job.custPhone}>{job.custPhone}</a>
                </p>
                <p>
                <b>Notes: </b><span>{job.jobDescription}</span>
                </p>
              </div>
              <div className="crew-form col">
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
                    Job Hours
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
          
              <div className="crew-form-button col text-center">
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
      ))
    )
  }


  render() {
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        {this.renderMyJobs()}

      </div>
    ); //end return
  } //end render
} //end MyJobs

export default MyJobs;
