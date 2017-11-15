import React from "react";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const JobListItem = props => (
  <li className="list-group-item" key={props._id}>
    <div className="container">
      <div className="row">
        <h3>Job Name: {props.jobName}</h3>
        <p>Crew Name: {props.crewName}</p>
      </div>
    </div>
  </li>
);
