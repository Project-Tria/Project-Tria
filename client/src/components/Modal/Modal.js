import React from "react";

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
            <p>Add a New Crew:</p>
            <input
              id="add-crew"
              placeholder="[Crew Type] - [Crew Lead]"
              name="crewNameDB"
              value={this.props.crewNameDB}
              onChange={event => {
                this.props.handleInputChange(event);
              }}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.closeModal}
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
        )}
      </div>
    </div>
  );
};

export default Modal;
