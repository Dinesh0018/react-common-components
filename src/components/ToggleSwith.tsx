import React from "react";  
interface Props {
    label:string;
  }
  const ToggleSwitchComponent = (props:Props) => {
    return (
    <div className="container">
      {props.label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
          name={props.label} id={props.label} />
        <label className="label" htmlFor={props.label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitchComponent;