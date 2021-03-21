import react from "react";

import {TextArea} from "../Input/Input";

import {SelectionWidget} from "../SelectionWidget/SelectionWidget";

import {Button} from "../Button/Button";

import {
    useCreateTimeEventMutation,
    useCreateDispEventMutation,
    useCreateStaffMutation
} from "../generated/graphql"


import "./style.css";



export const NewPass:react.FC = () => {
    let theme = "";
    let message = "";

    const [TimeThemeMutation] = useCreateTimeEventMutation();
    const [DispThemeMutation] = useCreateDispEventMutation();
    const [StaffThemeMutation] = useCreateStaffMutation()

    const TypePassProvider = new Map<string, Function>();

    TypePassProvider.set("Временный", TimeThemeMutation);
    TypePassProvider.set("Одноразовый", DispThemeMutation);
    TypePassProvider.set("Персонал", StaffThemeMutation);

    return <div className="new-pass__container">
        <SelectionWidget onChange={(e:string) => {theme=e;}}></SelectionWidget>
        <TextArea placeholder="Комментарий" onChange={(e:string)=>{message=e}}></TextArea>
        <Button onChange={()=>{
            TypePassProvider.get(theme)!({variables:
                {user_id:localStorage.getItem("id"), comment:message},
                }).then((e:any) => {console.log(e);})
        }} text={"Подать запрос на пропуск"}></Button>
    </div>
}