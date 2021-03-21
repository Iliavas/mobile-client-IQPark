import react from "react";

import "./style.css";


export const StaffPassDetail:react.FC = () => {
    return <div className="staff__container">
        <div>
            Активен: <span className="colorize">Нет</span>
        </div>
        <div>
            Комментарий: <span className="colorize">
                asdf
            </span>
        </div>
    </div>
}