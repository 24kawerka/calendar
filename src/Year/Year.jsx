import React from "react";

const Year = (props) => {
  let year = props.state.date.getFullYear();
  
  return year;
};

export default Year;
