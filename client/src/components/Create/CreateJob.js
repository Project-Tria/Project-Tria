import React, { Component } from "react";
import "./CreateJob.css";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class CreateJob extends Component {
  state = {
    jobDate: "",
    crewName: "",
    crewMembers: "",
    jobName: "",
    custPhone: "",
    custAddress: "",
    jobDescription: "",
    estimatedJobTime: ""
  };
  
  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res =>
        this.setState({
          jobs: res.data,
          crewName: "",
          jobName: "",
          custNumber: "",
          custAddress: "",
          estimatedJobTime: "",
          jobDescription: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    event.preventDefault();
    // if (
    //   this.state.crewName &&
    //   this.state.jobName &&
    //   this.state.custPhone &&
    //   this.state.custAddress &&
    //   this.state.estimatedJobTime &&
    //   this.state.jobDescription
    // )
    {
      let newJob = {
        crewName: this.state.crewName,
        crewMembers: this.state.crewMembers,
        jobName: this.state.jobName,
        custNumber: this.state.custPhone,
        custAddress: this.state.custAddress,
        estimatedJobTime: this.state.estimatedJobTime,
        jobDescription: this.state.jobDescription
      };
      console.log(newJob);

      API.saveJob(newJob)
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

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
            value={this.state.jobDate}
            onChange={this.handleInputChange}
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
              value={this.state.crewName}
              onChange={this.handleInputChange}
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
            name="crewMembers"
            value={this.state.crewMembers}
            onChange={this.handleInputChange}
            id="job-crew"
          />
        </div>

        <div className="form-group row">
          <label htmlFor="job-name" className="col-form-label">
            Job Name:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            name="jobName"
            value={this.state.jobName}
            onChange={this.handleInputChange}
            placeholder="[job type] - [customer-name]"
            id="job-name"
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
            value={this.state.custPhone}
            onChange={this.handleInputChange}
            placeholder="123-456-7890"
            id="cust-phone"
          />
        </div>

        <div className="form-group row">
          <label htmlFor="cust-address" className="col-form-label">
            Job Address:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            name="custAddress"
            value={this.state.custAddress}
            onChange={this.handleInputChange}
            placeholder="Customer Address"
            id="cust-address"
          />
        </div>

        <div className="form-group row">
          <label htmlFor="job-descrip">Job Notes</label>
          <textarea
            className="form-control"
            name="jobDescription"
            value={this.state.jobDescription}
            onChange={this.handleInputChange}
            id="job-descrip"
            rows="3"
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
            value={this.state.estimatedJobTime}
            onChange={this.handleInputChange}
            id="est-hours"
          />
        </div>

        <FormBtn onClick={this.handleFormSubmit}>Submit Job</FormBtn>
      </div>
    ); // end return
  } // end render
} // end CreateJob

export default CreateJob;
