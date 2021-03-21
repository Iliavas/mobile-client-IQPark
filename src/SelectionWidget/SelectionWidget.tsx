import react, { useState } from "react";

import "./style.css";

interface ISelectionWidget{
    onChange:Function;
}

export const SelectionWidget:react.FC<ISelectionWidget> = (props) => {

    const ValueList = ["Временный", "Одноразовый", "Персонал"]

    const [active, setActive] = useState("")

    return <div className="selection-widget__container">
        {
            ValueList.map((e) => {
                return <div className=
                {
                    "selection-widget__item " + (active == e ? "active-selection" : "")
                }
                onClick = {() => {
                    setActive(e);
                    props.onChange(e);
                }}
                >{e}</div>
            })
        }
        
    </div>
}