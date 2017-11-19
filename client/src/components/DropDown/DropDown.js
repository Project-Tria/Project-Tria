import React from "react";


// DropDown renders a bootstrap dropdown item containing DropDownOptions
export const DropDown = props => (
<select 
    className="form-control"
    type="list"
    id="crew"
    name="crewName"
    value={this.props.crewName}
    onChange={event => {
    this.props.handleInputChange(event);
    }}
>{props.children}</select>

);
