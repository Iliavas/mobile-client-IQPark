import react from "react";

import "./style.css"

interface IInput{
    placeholder:string;
    onChange:Function;
}

export const Input:react.FC<IInput> = (props) => {
    return <input className="input__container" placeholder={props.placeholder}
    onChange={(e) => {props.onChange(e.target.value)}}></input>
}

export const TextArea:react.FC<IInput> = (props) => {
    return <textarea
        onChange = {(e) => {props.onChange(e.target.value)}}
        className="input__container ta__container"
        placeholder={props.placeholder}
    ></textarea>
}