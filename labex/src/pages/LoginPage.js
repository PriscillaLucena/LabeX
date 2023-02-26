import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { URL_BASE } from "../components/UrlBase";
import axios from "axios";
import { goToAdminTripsList } from "../Routes/RouteFunctions";
import { ContainerGeral, Inputs, ContainerForm, Botoes, Astronauta } from "../Styled/StyledLoginPage";
import astronauta from "../img/astronauta.png"


export default function LoginPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
            <ContainerGeral>
                <Astronauta src={astronauta} alt="astronauta"/>
                <ContainerForm onClick={submitLogin}>
                    <Inputs
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />

                    <Inputs
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                    />

                    <Botoes variant="outlined" >enviar</Botoes>
                </ContainerForm>
            </ContainerGeral>
        </div>
    )
}