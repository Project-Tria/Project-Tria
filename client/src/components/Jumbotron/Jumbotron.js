import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className="jumbotron text-center" id="jumbo">
    {children}
  </div>;

export default Jumbotron;