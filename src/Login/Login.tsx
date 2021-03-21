import react, {useState} from "react";

import {Input} from "../Input/Input";

import {Button} from "../Button/Button";

import "./style.css"

import Logo from "../images/BigLogo.svg";

import {
    Link,
    useHistory
} from "react-router-dom";

import {
    useRegistrationMutation,
    useLoginMutation,
} from "../generated/graphql";



export const Register:react.FC = () => {
    const history = useHistory()
    const [regUser] = useRegistrationMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div className="form__container">
        <img src={Logo} className="logo"/>
        <Input placeholder="E-mail" onChange={(s:string)=>{setEmail(s)}}></Input>
        <Input placeholder="Password" onChange={(s:string)=>{setPassword(s)}}></Input>
        <Input placeholder="Password again" onChange={()=>{}}></Input>
        <Button onChange={() => {
            regUser({variables:{username:email, password:password}}).then((e) => {
                localStorage.setItem("id", e.data?.registration?.user?.id!) 
                history.push("index")
            })
        }} text="Register"></Button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
}

export const Login:react.FC = () => {
    return <div className="form__container">
        <img src={Logo} className="logo"/>
        <Input placeholder="E-mail" onChange={()=>{}}></Input>
        <Input placeholder="Password" onChange={()=>{}}></Input>
        <Button onChange={() => {}} text="Register"></Button>
        <p>Have no an account? <Link to="/register">Register</Link></p>
    </div>
}