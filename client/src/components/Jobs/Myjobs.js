import React, { Component } from "react";

/*
ADDRESS - we can create a link to google maps by wrapping the address in a link and having the href be https://www.google.com/maps?addr=[custAddress]103+highfalls+ct+

PHONE - <a href="tel:1-408-555-5555">1-408-555-5555</a> iOS

use props._id to dynamically change the id=headingOne to id=heading+{props._id}
*/

class MyJobs extends Component {
  render() {
    return (
      <div id="accordion" role="tablist" aria-multiselectable="true">
        <div className="card">
          <div className="card-header" role="tab" id="headingOne">
            <h3 className="mb-0">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                [JOB NAME]
              </a>
            </h3>
            <p> [JOB ADDRESS]</p>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div className="card-block text-left">
              <div className="row job-row">
                <div className="col">
                  <p>
                    Cust. Phone: <span>[CUSTPHONE]</span>
                  </p>
                  <p>
                    Notes: <span>[JOB NOTES]</span>
                  </p>
                </div>
                <div className="crew-form col">
                  <div className="crew-form-fields">
                    <label htmlFor="job-descrip">Crew Notes:</label>
                    <textarea
                      className="form-control"
                      name="jobDescription"
                      value=""
                      
                      id="job-descrip"
                      rows="3"
                    />

                    <label htmlFor="act-hours" className="col col-form-label">
                      Job Hours
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      name="actualJobTime"
                      value=""
                      
                      id="act-hours"
                    />
                  </div>
                </div>

                <div className="crew-form-button col text-center">
                  <button
                    onClick={this.handleFormSubmit}
                    type="button"
                    className="btn btn-lg btn-danger"
                  >
                    Complete Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingTwo">
            <h3 className="mb-0">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                [JOB NAME]
              </a>
            </h3>
            <p> [JOB ADDRESS]</p>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingTwo"
          >
            <div className="card-block text-left">
              <div className="row job-row">
                <div className="col">
                  <p>
                    Cust. Phone: <span>[CUSTPHONE]</span>
                  </p>
                  <p>
                    Notes: <span>[JOB NOTES]</span>
                  </p>
                </div>
                <div className="crew-form col">
                  <div className="crew-form-fields">
                    <label htmlFor="job-descrip">Crew Notes:</label>
                    <textarea
                      className="form-control"
                      name="jobDescription"
                      value=""
                      
                      id="job-descrip"
                      rows="3"
                    />

                    <label htmlFor="act-hours" className="col col-form-label">
                      Job Hours
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      name="actualJobTime"
                      value=""
                      
                      id="act-hours"
                    />
                  </div>
                </div>

                <div className="crew-form-button col text-center">
                  <button
                    onClick={this.handleFormSubmit}
                    type="button"
                    className="btn btn-lg btn-danger"
                  >
                    Complete Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" role="tab" id="headingABCDE">
            <h3 className="mb-0">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseABCDE"
                aria-expanded="true"
                aria-controls="collapseABCDE"
              >
                [JOB NAME]
              </a>
            </h3>
            <p> [JOB ADDRESS]</p>
          </div>
          <div
            id="collapseABCDE"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingABCDE"
          >
            <div className="card-block text-left">
              <div className="row job-row">
                <div className="col">
                  <p>
                    Cust. Phone: <span>[CUSTPHONE]</span>
                  </p>
                  <p>
                    Notes: <span>[JOB NOTES]</span>
                  </p>
                </div>
                <div className="crew-form col">
                  <div className="crew-form-fields">
                    <label htmlFor="job-descrip">Crew Notes:</label>
                    <textarea
                      className="form-control"
                      name="jobDescription"
                      value=""
                      
                      id="job-descrip"
                      rows="3"
                    />

                    <label htmlFor="act-hours" className="col col-form-label">
                      Job Hours
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      name="actualJobTime"
                      value=""
                      
                      id="act-hours"
                    />
                  </div>
                </div>

                <div className="crew-form-button col text-center">
                  <button
                    onClick={this.handleFormSubmit}
                    type="button"
                    className="btn btn-lg btn-danger"
                  >
                    Complete Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); //end return
  } //end render
} //end MyJobs

export default MyJobs;
