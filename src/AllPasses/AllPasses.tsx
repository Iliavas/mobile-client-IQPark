import react, {useState} from "react";
import Sidebar from "react-sidebar";

import {NewPass} from "../NewPass/NewPass";

import {
    Link,
    useRouteMatch,
    Switch,
    Route,
    Redirect,
    useHistory
} from "react-router-dom";

import {MyPasses} from "../MyPasses/MyPasses";

import "./style.css"

import menu from "../images/menu.svg";

export const AllPasses:react.FC = () => {

    const [sideOpen, setSideOpen] = useState(false)
    const {url} = useRouteMatch();
    const history = useHistory();
    return <Sidebar
        sidebar={<SideBarContent></SideBarContent>}
        open={sideOpen}
        onSetOpen={setSideOpen}
        sidebarClassName="sidebar"
        rootClassName="overlay"
    >
        <div className="appbar">
            <img src={menu} alt="" onClick={() => {setSideOpen(true)}}/>
            <div className="back" onClick={() => {history.goBack()}}>Назад</div>
        </div>
        <Switch>
            <Route path={`${url}/new-pass`}>
                <NewPass></NewPass>
            </Route>
            <Route path={`${url}/my-passes`}>
                <MyPasses></MyPasses>
            </Route>
            <Route path={`${url}`}>
                <Redirect to={`${url}/my-passes`}></Redirect>
            </Route>
        </Switch>

    </Sidebar>
}


const SideBarContent:react.FC = () => {
    const {url} = useRouteMatch()
    return <div className="side-content__container">
        <p className="side-text">Menu</p>
        <div className="side__content">
            <Link to={`${url}/all-passes`} className="side-link">
                My Passes
            </Link>
            <Link to={`${url}/new-pass`} className="side-link">
                New Pass
            </Link>
            <Link to={`${url}/personal-data`} className="side-link">
                My Personal Data
            </Link>
        </div>
        <p className="side-text sign-out">Sign Out</p>
    </div>

}