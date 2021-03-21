import react from "react";

import {useAllTimeEventQuery, AllTimeEventQuery} from "../generated/graphql"

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import {TimeWidgetDetail} from "../TimeWidgetDetail/TimeWidgetDetail"
import {DisposablePass} from "../DisposbalePassDetail/DisposablePass";
import {StaffPassDetail} from "../StaffPassDetail/StaffPassDetail";


import clock from "../images/clock.svg";
import onePass from "../images/onePass.svg";
import ManyPass from "../images/passMany.svg";

import "./style.css"

export const MyPasses:react.FC = () => {
    const {url} = useRouteMatch();
    const {loading, data} = useAllTimeEventQuery({variables:{user_id:localStorage.getItem("id")!}})
    if (loading) return <div>loading...</div>
    return  <Switch>
            <Route path={`${url}/time/:id`}>
                <TimeWidgetDetail></TimeWidgetDetail>
            </Route>
            <Route path={`${url}/disposable/:id`}>
                <DisposablePass></DisposablePass>
            </Route>
            <Route path={`${url}/staff/:id`}>
                <StaffPassDetail></StaffPassDetail> 
            </Route>
            <Route path={url}>
                <div className="my-passes__container">
                    <div className="my-passes__heading">
                        My Passes
                    </div>
                    {parseTimeWidget(data!, url)}
                </div>
            </Route>
    </Switch>

}

function parseTimeWidget(data:AllTimeEventQuery, url:string){
    let res = [];
    for (let i of data.User?.timeeventSet.edges!){
        res.push(
            <Link to={`${url}/time/${i?.node?.id!}`}>
                <TimePassWidget checked={i?.node?.checked!} event="Временный" image={clock}></TimePassWidget>
            </Link>
        )
    }
    for (let i of data.User?.disposableeventSet.edges!) {
        res.push(
            <Link to={`${url}/disposable/${i?.node?.id}`}>
                <TimePassWidget checked={i?.node?.checked!} event={"Одноразовый"} image={onePass}></TimePassWidget>
            </Link>
        )
    }
    for (let i of data.User?.staffeventSet.edges!) {
        res.push(
            <Link to={`${url}/staff/${i?.node?.id}`}>
                <TimePassWidget checked={i?.node?.checked!} event={"Персонал"} image={ManyPass}></TimePassWidget>
            </Link>
        )
    }
    return res;
}

interface ITimePassWidget{
    checked:boolean;
    event:string;
    image:string;
}
const TimePassWidget:react.FC<ITimePassWidget> = (props) => {
    return <div className="time-pass__container">
        <div className="time-pass__col">
            <div>{props.event}</div>
            <div>
                Активен: <span className="colorize">
                    {
                        props.checked ? "Да" : "Нет"
                    }
                </span>
            </div>
        </div>
        
        <img src={props.image} alt=""/>
    </div>
}