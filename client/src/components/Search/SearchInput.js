import React, { Component } from "react";
import "./SearchInput.css";

class SearchInput extends Component {
    state = {
        crewName: "",
        startDate: "",
        endDate: "",
        jobName: ""        
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
        alert("Crew Name" + this.state.crewName);
    }


    render() {
        return (
            <div>
            <div className="container text-center border">
                
                <div className="form-group row">
                    <label htmlFor="crew-dropdown" className=" col-form-label text-right">
                        Select Crew:
                    </label>
                    <div className="form-group">
                        <select
                            className="form-control"                            type="list"
                            id="crew"
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
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
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
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
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
                        value={this.state.jobName}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <span>&nbsp;</span>                    
            </div>
            <div>          
                <button onClick={this.handleFormSubmit} type="button" className="btn btn-lg btn-primary">Search Crew
                </button>
            </div>
         </div>   

        ); // end return
    } // end render
} // end SearchInput

export default SearchInput;