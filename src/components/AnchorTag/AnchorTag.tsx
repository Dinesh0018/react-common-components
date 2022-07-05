import React, { useState,useEffect } from "react";
import { Button } from 'react-bootstrap';

interface Props{
    buttonText: string,
    buttonUrl?: string,
    bgColor?: string,
    isDisabled?: boolean,
    className: string,
    link:string,
    linkOpened: string
}


const AnchorTag = (props : Props) => {

    return(
        <div>
           <a className={props.className} href={props.link} target={props.linkOpened}>{props.buttonText} </a>
        </div>
    )
}
export default AnchorTag;
