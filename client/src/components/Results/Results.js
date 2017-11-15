import React, { Component } from "react";
import { JobList, JobListItem } from "../JobList/"
class Results extends Component {

    renderJobs = (props) => {
        // if (this.props.jobs.length === 0) {
        //   return <h3> No Jobs found! </h3>;
        // }
    
        return (
          <JobList>
            {
              this.props.jobs.map(job => (
            <JobListItem 
    
            />
            ))
            }
          </JobList>
        );
      };

    render(){
        return(
            <div className="container text-center border">
                {this.renderJobs()}
            </div>
        )//end return
    } //end render
} ///end Search


export default Results;