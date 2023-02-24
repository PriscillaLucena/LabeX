import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { URL_BASE } from "../components/UrlBase";
import axios from "axios";
import { goToAdminTripsList } from "../Routes/RouteFunctions";
// import Button from '@mui/material/Button';


export default function LoginPage() {

    const navigate = useNavigate ();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //endpoint login

    const submitLogin = async (e) => {
    e.preventDefault()
        const body = {
            email: email,
            password: password
        }

        try {
            const response = await axios.post(`${URL_BASE}/login`, body)
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            goToAdminTripsList(navigate);

        } catch (error) {
            console.log(error.response)
        }
    };

    return (
        <div>
            <Header
            nome={"login"}
            />
        <form onClick={submitLogin}>
            <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="e-mail"
            />

            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                label="senha"
            />

            <button variant="outlined" >enviar</button>
            </form>
        </div>
    )
}