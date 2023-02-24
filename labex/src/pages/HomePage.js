import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import Button from '@mui/material/Button';
import { ContainerGeral, ContainerBotoes } from "../Styled/HomeStyled";


export default function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <ContainerBotoes>
                <h2>Bem vindo ao <span>LABEX</span></h2>
                <button variant="contained" size="large" onClick={() => goToLogin(navigate)}>Login</button>
                <button variant="contained" size="large" onClick={() => goToTripsList(navigate)}>Ver Viagens</button>
            </ContainerBotoes>
        </ContainerGeral>
    )
}