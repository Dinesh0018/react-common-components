import React, { useState } from 'react';


interface Props{
    inputType: string,
    inputPlaceholder:string,
    onChangeValue: (val: string) => void

}

export const  CInput =(props : Props) =>{

    const [inputType, setInputType] = useState(props.inputType)
    const [inputPlaceholder, setinputPlaceholder] = useState(props.inputPlaceholder)
    const [onChangeValue, setonChangeValue] = useState('');


    const onChangeInputval=(e:any)=>{
        let value = e.target.value
        props.onChangeValue(value)
    }

    return(
        <div>
            <input type={inputType} placeholder={inputPlaceholder} onChange={onChangeInputval}>  
            </input>
            <h2>{onChangeValue}</h2>
        </div>
    )
}