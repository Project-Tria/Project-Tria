import React, { Component } from "react";

class Results extends Component {


    render(){
        return(
    
            <div className="container text-center border">
                <h1>Results go Here</h1>
                <p>Jobs Name: {this.props.jobs}</p>
            </div>
 
        )
    } //end render
} ///end Search


export default Results;