import React, { Component } from "react";
import "./CreateJob.css";

class CreateJob extends Component {
  state = {
    jobDate: "",
    jobCrew: "",
    jobName: "",
    custPhone: "",
    custAddress: "",
    jobNotes: "",
    estTime: ""
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






  render() {
    return (
      <div className="container text-center border">
        <div className="form-group row">
          <label for="date-input" className=" col-form-label text-right">
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
          <label for="crew-dropdown" className=" col-form-label text-right">
            Select Crew:
          </label>
          <div className="form-group">
            <select
              className="form-control"
              id="crew-dropdown"
              name="jobDate"
                value={this.state.jobCrew}
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
          <label for="job-crew" className="col-form-label">
            Job Crew:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            value=""
            placeholder="Enter Crew Members"
            id="job-crew"
          />
        </div>

        <div className="form-group row">
          <label for="job-name" className="col-form-label">
            Job Name:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            value=""
            placeholder="[job type] - [customer-name]"
            id="job-name"
          />
        </div>

        <div className="form-group row">
          <label for="example-tel-input" class="col-2 col-form-label">
            Telephone:{" "}
          </label>
          <input
            class="form-control"
            type="tel"
            value="1-(555)-555-5555"
            id="example-tel-input"
          />
        </div>

        <div className="form-group row">
          <label for="job-address" className="col-form-label">
            Job Address:{" "}
          </label>
          <input
            className="col-3 form-control"
            type="text"
            value=""
            placeholder="Customer Address"
            id="job-address"
          />
        </div>

        <div className="form-group row">
          <label for="job-notes">Job Notes</label>
          <textarea className="form-control" id="job-notes" rows="3" />
        </div>

        <div className="form-group row">
          <label for="example-number-input" className="col-2 col-form-label">
            Number
          </label>
          <input
            className="form-control"
            type="number"
            value="42"
            id="example-number-input"
          />
        </div>

        <button onClick={this._handleFormSubmit} type="button" className="btn btn-lg btn-primary">Create Job</button>


      </div>
    ); // end return
  } // end render
} // end CreateJob

export default CreateJob;
