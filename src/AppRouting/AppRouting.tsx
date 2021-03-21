import react from "react";


import {
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import {Register, Login} from "../Login/Login";
import {AllPasses} from "../AllPasses/AllPasses";

export const AppRouting:react.FC = () => {
    return <Switch>
            <Route path="/register">
                <Register></Register>  
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/index">
                <AllPasses></AllPasses>
            </Route>
            <Route path="/">
                {
                    localStorage.getItem("id")?.length ? 
                    <Redirect to="index"></Redirect> :
                    <Redirect to="register"></Redirect>
                }
            </Route>
        </Switch>
    }