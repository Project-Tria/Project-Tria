import React, { Component } from "react";

import "./CreateJob.css";
// import API from "../../utils/API";
// import FormBtn from "../../components/Form";
// import { Input, TextArea, FormBtn } from "../../components/Form";

let jobTimeField = false;
let jobDescriptionField = false;
let custStateField = false;
let custCityField = false;
let custAddressField = false;
let custPhoneField = false;
let jobNameField = false;
let crewMembersField = false;
let crewNameField = false;
let jobDateField = false;



class CreateJob extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  renderCrew = props => {
    return this.props.crews.map(crew => (
      <option key={"header" + crew._id}>{crew.crewNameDB}</option>
    ));
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    })
  }




  render() {
    console.log("this is the state from cwrp",this.state)
    console.log("this is the props", this.props)
    return (
      <div className="container text-center border background-region">
        <div className="form-group row">
          <label
            htmlFor="date-input"
            className=" col-form-label col-3 text-right label-text"
          >
            Job Date:
          </label>
          <input
            className="col-6 form-control"
            type="date"
            id="date-input"
            name="jobDate"
            value={this.state.jobDate}
            onChange={event => {
              this.props.handleInputChange(event);
              jobDateField = true;
            }}
          />
        </div>

        <div className="form-group row" id="crew-space">
          <label
            htmlFor="crew-dropdown"
            className=" col-form-label col-3 text-right label-text"
          >
            Select Crew:
          </label>
          <div className="form-group col-4" id="select-crew">
            <select
              className="form-control"
              id="crew-dropdown"
              name="crewName"
              value={this.state.crewName}
              onChange={event => {
                this.props.handleInputChange(event);
                crewNameField = true;
              }}
            >
              <option>Select a crew</option>
              {this.renderCrew()}
            </select>
          </div>
          <span>&nbsp;</span>
          <button
            type="button"
            className="btn btn-success col-2"
            id="add-crew-btn"
            data-target="#add-crew-modal"
            data-toggle="modal"
          >
          <i className="glyphicon glyphicon-plus"></i>
            <span className="button-text">Add Crew</span>
          </button>
        </div>

        <div
          className="modal fade"
          id="add-crew-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add a New Crew
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="form-group row">
                  <label htmlFor="new-crew" className="col-form-label label-text">
                    New Crew Name:{" "}
                  </label>
                  <input
                    className="col-6 form-control"
                    type="text"
                    placeholder="[Crew Type] - [Crew Lead]"
                    id="new-crew"
                    name="crewNameDB"
                    value={this.state.crewNameDB}
                    onChange={event => {
                      this.props.handleInputChange(event);
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={event => {
                    this.props.addCrew();
                  }}
                >
                  Create Crew
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="job-crew" className="col-form-label col-3 text-right label-text">
            Job Crew:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="text"
            placeholder="Enter Crew Members"
            id="job-crew"
            name="crewMembers"
            value={this.state.crewMembers}
            onChange={event => {
              this.props.handleInputChange(event);
              crewMembersField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label htmlFor="job-name" className="col-form-label col-3 text-right label-text">
            Job Name:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="text"
            placeholder="[job type] - [customer-name]"
            id="job-name"
            name="jobName"
            value={this.state.jobName}
            onChange={event => {
              this.props.handleInputChange(event);
              jobNameField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="cust-phone"
            className="col-form-label col-3 text-right label-text"
          >
            Telephone:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="tel"
            placeholder="123-456-7890"
            name="custPhone"
            id="cust-phone"
            value={this.state.custPhone}
            onChange={event => {
              this.props.handleInputChange(event);
              custPhoneField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="cust-address"
            className="col-form-label col-3 text-right label-text"
          >
            Job Address:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="text"
            placeholder="Street"
            id="cust-address"
            name="custAddress"
            value={this.state.custAddress}
            onChange={event => {
              this.props.handleInputChange(event);
              custAddressField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="cust-city"
            className="col-form-label col-3 text-right label-text"
          >
            Job City:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="text"
            placeholder="City"
            id="cust-city"
            name="custCity"
            value={this.state.custCity}
            onChange={event => {
              this.props.handleInputChange(event);
              custCityField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="cust-state"
            className="col-form-label col-3 text-right label-text"
          >
            Job State:{" "}
          </label>
          <input
            className="col-6 form-control"
            type="text"
            placeholder="State Abbreviation"
            id="cust-state"
            name="custState"
            value={this.state.custState}
            onChange={event => {
              this.props.handleInputChange(event);
              custStateField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="job-descrip"
            className="col-form-label col-3 text-right label-text"
          >
          Job Notes:
          </label>
          <textarea
            className="col-6 form-control"
            name="jobDescription"
            id="job-descrip"
            rows="3"
            value={this.state.jobDescription}
            onChange={event => {
              this.props.handleInputChange(event);
              jobDescriptionField = true;
            }}
          />
        </div>

        <div className="form-group row">
          <label
            htmlFor="est-hours"
            className="col-form-label col-3 text-right label-text"
          >
          Est. Hours
          </label>
          <input
            className="col-6 form-control"
            type="number"
            name="estimatedJobTime"
            id="est-hours"
            value={this.state.estimatedJobTime}
            onChange={event => {
              this.props.handleInputChange(event);
              jobTimeField = true;
            }}
          />
        </div>

        <button
          onClick={event => {
            this.props.handleFormSubmit(event);
          }}
          type="submit"
          className="btn btn-lg button-orange"
          disabled={
            !(
              jobTimeField &&
              jobDescriptionField &&
              custStateField &&
              custCityField &&
              custAddressField &&
              custPhoneField &&
              jobNameField &&
              crewMembersField &&
              crewNameField &&
              jobDateField
            )
          }
        >
          Create Job
        </button>

        {/* <FormBtn onClick={this.handleFormSubmit}>Submit Job</FormBtn> */}
      </div>
    ); // end return
  } // end render
} // end CreateJob

export default CreateJob;
