import React  from "react";
interface props {
    name: string;
    label: string;
    value?:string;
    type:string;
    inputClassName: string;
    placeholder:string;
    divClassName:string;
    labelClassName:string;
    onChange?:()=>void;
    
}
const InputText = (props:props) => {
    return (
        <div className={props.divClassName}>
            <label className={props.labelClassName}>{props.label}</label>
            <input
            type={props.type}
            value={props.value}
            name={props.name}
            className={props.inputClassName}
            placeholder={props.placeholder}
            onChange= {props.onChange}
            />
        </div>
    );
};

export default InputText;