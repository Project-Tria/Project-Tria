import React, { Component } from "react";
import "./CreateJob.css";
// import API from "../../utils/API";
// import FormBtn from "../../components/Form";
// import { Input, TextArea, FormBtn } from "../../components/Form";



class CreateJob extends Component {
  
  
  renderCrew = (props) => {
    return (
      this.props.crews.map(crew =>(
        <option>{crew.crewNameDB}</option>
      ))
    )
  }
  


  render() {
    return (
      <div className="container text-center border">
        <div className="form-group row">
          <label htmlFor="date-input" className=" col-form-label text-right">
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

        <div className="form-group row">
          <label htmlFor="crew-dropdown" className=" col-form-label text-right">
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
              <option>Cleaning - Peter</option>
              <option>Cleaning - Paul</option>
              <option>Cleaning - Mary</option>
              <option>Trimming - Bob</option>
              <option>Trimming - Barb</option>
            </select>
          </div>
          <span>&nbsp;</span>
          <button type="button" className="btn btn-success" id="add-crew-btn">
            Add Crew
          </button>
        </div>

        <div className="form-group row">
          <label htmlFor="job-crew" className="col-form-label">
            Job Crew:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            placeholder="Enter Crew Members"
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
            Job Name:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            placeholder="[job type] - [customer-name]"
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
            Telephone:{" "}
          </label>
          <input
            className="form-control"
            type="tel"
            name="custPhone"
            placeholder="123-456-7890"
            id="cust-phone"
            value={this.props.custPhone}
            onChange={event => {
              this.props.handleInputChange(event);
            }}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="cust-address" className="col-form-label">
            Job Address:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            placeholder="Customer Address"
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
            Est. Hours
          </label>
          <input
            className="form-control"
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
              onClick={event => {
                this.props.handleFormSubmit(event);
              }}
              type="submit"
              className="btn btn-lg btn-primary"
            >
              Create Job
            </button>
            {/* <FormBtn onClick={this.handleFormSubmit}>Submit Job</FormBtn> */}
      </div>
    ); // end return
  } // end render
} // end CreateJob

export default CreateJob;
