import React, { useState,useEffect } from "react";
import { Button } from 'react-bootstrap';

interface Props{
    buttonText: string,
    buttonUrl?: string,
    bgColor?: string,
    isDisabled?: boolean,
    className: string,
    handleClick?: ()=>void 
}

const ButtonComponent = (props : Props) => {
    return(
        <div>
           <button className={props.className} onClick={props.handleClick} >{props.buttonText} </button>
        </div>
    )
}

export default ButtonComponent;
 