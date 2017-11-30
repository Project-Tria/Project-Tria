import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return <div className="footer-container">
      <div className="footer-top" />
      <div className="footer-bottom text-center">
        <p className="footer-text">
          <span />© 2017  <a href="https://www.linkedin.com/in/wesbubeck/" target="_blank"> Wes Bubeck</a> | <a href="https://www.linkedin.com/in/rj-perry-designs/" target="_blank"> RJ Perry</a> | <a href="https://www.linkedin.com/in/denismolloy/" target="_blank"> Denis Molloy</a>
        </p>
      </div>
    </div>;
  }
}



export default Footer;