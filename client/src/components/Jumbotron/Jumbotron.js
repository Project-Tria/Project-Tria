import React from "react";
import "./Jumbotron.css"

const Jumbotron = ({ children }) =>
  <div style={{ height: 300 }} className="jumbotron text-center" id="jumbo">
    {children}
  </div>;

export default Jumbotron;