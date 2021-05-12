import react, { Component, useState } from "react";
import propTypes from "prop-types";

function Event(props) {
  function List(props) {
    return <div>{props.value}</div>;
  }
  function NameList(props) {
    const name = props.name;
    const listn = this.name.map((name) => 
      <div>
        <list key={name} value={name} />
      </div>
    );
  
    return (
      <div>{props.name}</div>
    )
  }
  
  return (
    
    <div><List/></div>

  );
    
   } 




export default Event;
