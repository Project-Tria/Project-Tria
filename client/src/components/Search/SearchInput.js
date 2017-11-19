import React, { Component } from "react";
import "./SearchInput.css";
import "../DropDown/DropDownOptions";
// import API from "../../utils/API";

class SearchInput extends Component {
  //might want to wrap form in form tag

  render() {
    return ( 
      <div>
        <div className="container text-center border">
          <div className="form-group row">
            <label
              htmlFor="crew-dropdown"
              className=" col-form-label text-right"
            >
              Select Crew:
            </label>
            <div className="form-group">
              <select
                className="form-control"
                type="list"
                id="crew"
                name="crewName"
                value={this.props.crewName}
                onChange={event => {
                  this.props.handleInputChange(event);
                }}
              >
                
                <option>Select a crew</option>
                <DropDownOptions/>
                <option>Cleaning - Peter</option>
                <option>Cleaning - Paul</option>
                <option>Cleaning - Mary</option>
                <option>Trimming - Bob</option>
                <option>Trimming - Barb</option>
                
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="date-input" className=" col-form-label text-right">
              Job Start Date:
            </label>
            <input
              className="col-3 form-control"
              type="date"
              id="date-input"
              name="startDate"
              value={this.props.startDate}
              onChange={event => {
                this.props.handleInputChange(event);
              }}
            />
          </div>
          <div className="form-group row">
            <label htmlFor="date-input" className=" col-form-label text-right">
              Job End Date:
            </label>
            <input
              className="col-3 form-control"
              type="date"
              id="date-input"
              name="endDate"
              value={this.props.endDate}
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
              id="jobName"
              name="jobName"
              value={this.props.jobName}
              onChange={event => {
                this.props.handleInputChange(event);
              }}
            />
          </div>
          <span>&nbsp;</span>
          <div>
            <button
              onClick={event => {
                this.props.handleFormSubmit(event);
              }}
              type="submit"
              className="btn btn-lg btn-primary"
            >
              Search Crew
            </button>
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end SearchInput

export default SearchInput;
