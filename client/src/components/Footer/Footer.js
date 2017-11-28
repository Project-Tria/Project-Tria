import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-top">
                </div>
                <div className="footer-bottom text-center">
                <p>                    
                    <span style={{ fontSize: 12 }}>
                        <i>powered by </i>
                    </span>Crewify
                </p>
            </div>
            </div>
        )
    }
}



export default Footer;