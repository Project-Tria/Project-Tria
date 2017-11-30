import React, { Component } from "react";
import "./SearchInput.css";

// import API from "../../utils/API";

class SearchInput extends Component {
  //might want to wrap form in form tag
  renderCrew = props => {
    return this.props.crews.map(crew => (
      <option key={"header" + crew._id}>{crew.crewNameDB}</option>
    ));
  };

  render() {
    return (
      <div>
        <div className="container text-center border background-region">
          <div className="form-group row">
            <label
              htmlFor="crew-dropdown"
              className="col-form-label col-3 text-right"
            >
              Select Crew:
            </label>
            <div className="form-group col-6" id="crew-drop">
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
                <option>Select A Crew</option>
                <option>Search All Crews</option>
                {this.renderCrew()}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="date-input"
              className="col-form-label col-3 text-right"
            >
              Job Start Date:
            </label>
            <input
              className="col-6 form-control"
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
            <label
              htmlFor="date-input"
              className="col-form-label col-3 text-right"
            >
              Job End Date:
            </label>
            <input
              className="col-6 form-control"
              type="date"
              id="date-input"
              name="endDate"
              value={this.props.endDate}
              onChange={event => {
                this.props.handleInputChange(event);
              }}
            />
          </div>

          <div>
            <button
              onClick={event => {
                this.props.handleFormSubmit(event);
              }}
              type="submit"
              className="btn btn-lg btn-primary"
            >
              Search Jobs
            </button>
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end SearchInput

export default SearchInput;
