import react from "react";

import "./style.css"

interface IButton{
    onChange:Function;
    text:string;
    className?:string;
}

export const Button:react.FC<IButton> = (props) => {
    return <button className={"button__container " + props.className} onClick={() => {props.onChange()}}>
        {props.text}
    </button>
}

export const RejectButton:react.FC<IButton> = (props) => {
    return <button className="button__container reject" onClick={() => {props.onChange()}}>
        {props.text}
    </button>
}