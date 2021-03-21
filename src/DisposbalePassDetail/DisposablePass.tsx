import react from "react";

import {useGetDispInfoQuery} from "../generated/graphql";

import QRCode from "react-qr-code";

import {
    useParams
} from "react-router-dom";

import "./style.css"

export const DisposablePass:react.FC = () => {
    const {id} = useParams<{id:string}>();
    const {loading, data} = useGetDispInfoQuery({variables: {disp_id:id}});
    if (loading) return <div>loading...</div>
    return <div className="dispevent__container">
        <div className="type">
            Тип: <span className="colorize">Одноразовый</span>
        </div>
        <div className="active">
            Активен: <span className="colorize">{
            data?.DisposableEvent?.checked! ? "Да" : "Нет"
            }</span>
        </div>
        <div className="used">
            Использован: <span className="colorize">{
                data?.DisposableEvent?.used ? "Да" : "Нет"
            }</span>
        </div>
        <div className="comment">
            Комментарий: <span className="colorize">{data?.DisposableEvent?.comment}</span>
        </div>
        <div className="qr">
            <QRCode value={`Disposable/${id}`}></QRCode>
        </div>
    </div>
}