import react from "react";

import {
    useParams
} from "react-router-dom";

import {useGetTimeEventQuery} from "../generated/graphql";
import QRCode from "react-qr-code";

import "./style.css"

export const TimeWidgetDetail:react.FC = () => {
    const {id} = useParams<{id:string}>();
    const {loading, data} = useGetTimeEventQuery({variables:{timeEventId:id}});

    if (loading) {return <div>loading...</div>}
    console.log(data);
    return <div className="time-widget__container">
        <div>
            Тип: <span className="colorize">Временный</span>
        </div>
        <div className="acces">
            Доступен: <span className="colorize">{
            data?.TimeEvent?.checked ? "Да" : "Нет"
            }</span>
        </div>
        <div className="comment">
            Комментарий при заявке: <span className="colorize">
                {data?.TimeEvent?.comment}
            </span>
        </div>
        <div>
            Доступен до: <span className="colorize">
                {data?.TimeEvent?.deadline}
            </span>
        </div>
        <div className="qr">
            <QRCode value={`Time/${id}`}></QRCode>
        </div>
    </div>
}