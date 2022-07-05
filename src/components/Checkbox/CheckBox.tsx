import React, { useState,useEffect } from "react";

interface Props{
    checkBox?:string,
    clsName?:string,
    inputClsName:string,
    labelClsName?:string,
    labelName?:string,
    checkBoxId?:string,
    val:string
   
}

const CheckBox = (props : Props) => {
    const {inputClsName,labelClsName,checkBoxId}=props;
    return(
        <div className="form-check">
           <input className= {inputClsName || "form-check-input"} type="checkbox" value={props.val} id={checkBoxId || "flexCheckDefault"}/>
           <label className={labelClsName || "form-check-label"}>{props.labelName} </label>
        </div>
       )
    }

export default CheckBox;
