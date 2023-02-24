import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import { ContainerBotoes, ContainerGeral, Letras, Letras2, Botoes } from "../Styled/HomeStyled";


export default function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <div>
                <Letras>Bem vindo ao <Letras2>LabeX</Letras2></Letras>
                <ContainerBotoes>
                <Botoes variant="outlined" size="large" onClick={() => goToLogin(navigate)}>Login</Botoes>
                <Botoes variant="contained" size="large" onClick={() => goToTripsList(navigate)}>Ver Viagens</Botoes>
                </ContainerBotoes>
            </div>
        </ContainerGeral>
    )
}