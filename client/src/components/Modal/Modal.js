import React from "react";
import "./Modal.css";
// value={this.props.crewNameDB}
const Modal = props => {
  return (
    <div className="modal-background">
      <div className="modal-box">
        {props.isConfirmation ? (
          <div>
            <p>Crew Added!</p>
            <button className="btn btn-primary">OK</button>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col">
                <p className="modal-title">Add a New Crew:</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  id="add-crew"
                  className="text-center"
                  placeholder="[Crew Type] - [Crew Lead]"
                  name="crewNameDB"
                  onChange={event => {
                    props.handleInputChange(event);
                  }}
                />
              </div>
            </div>
            <div className="row button-row">
              
                <button
                  type="button"
                  className="btn btn-secondary close-button"
                  onClick={() => props.toggleModal()}
                >
                  Close
                </button>
              
              
                <button
                  type="button"
                  className="btn btn-success add-button"
                  onClick={event => {
                    props.addCrew();
                    props.toggleModal();
                  }}
                >
                  Create Crew
                </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
