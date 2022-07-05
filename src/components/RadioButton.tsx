import React  from "react";

interface props {
    name?: string;
    label?: string;
    type:string;
    value?:string;
    inputClassName?: string;
    divClassName?:string;
    labelClassName?:string;
    onChange?:()=>void;
}
const RadioButtonComponent = (props:props) => {
    return (
        <div className={props.divClassName}>
            <label className={props.labelClassName}>
                <input
                type={props.type}
                value={props.value}
                name={props.name}
                className={props.inputClassName}
                onChange= {props.onChange}
                />
            {props.label}</label>
        </div>
    );
};

export default RadioButtonComponent;