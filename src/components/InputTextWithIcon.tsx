import React  from "react";
interface props {
    name?: string;
    label?: string;
    value?:string;
    type:string;
    inputClassName: string;
    placeholder:string;
    divClassName:string;
    labelClassName:string;
    onChange?:()=>void;
    
}
const InputTextWithIcon = (props:props) => {
    return (
        <div className={props.divClassName}>
            <img className={props.labelClassName}  src={require('./tick_icon.svg')} alt="text" />
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

export default InputTextWithIcon;