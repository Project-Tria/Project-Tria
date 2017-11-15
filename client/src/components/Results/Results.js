import React, { Component } from "react";
// import { JobList, JobListItem } from "../JobList/"
import { JobList } from "../JobList/"
class Results extends Component {

    renderJobs = (props) => {
        // if (this.props.jobs.length === 0) {
        //   return <h3> No Jobs found! </h3>;
        // }
    
        return (
          <JobList>
            {
              this.props.jobs.map(job => (
    
            
                <li>
                <p>{job.jobName} {job.crewName}{job.custAddress}{job.jobDate}</p>

                </li>
          
            ))
            }
          </JobList>
        );
      };

    render(){
        return(
            <div className="text-center">
            <h3>Search Results</h3>
            <div className="container text-center border">
                {this.renderJobs()}
            </div>
            </div>
        )//end return
    } //end render
} ///end Search


export default Results;