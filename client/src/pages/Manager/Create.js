import React, { Component } from "react";
import CreateJob from "../../components/Create/CreateJob"

class Create extends Component {

createObj =()=>{
  alert("callback")
}

  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to Manager - Create</h1>
        <br />
        <a href="/manager/" className="btn btn-info">Back</a>
        <br />
        <br />
        
        <CreateJob createJobCallback={this.createObj}/>
      </div>
    );
  }
} //end class

export default Create;