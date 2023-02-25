import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import { ContainerBotoes, ContainerGeral, Letras, Letras2, Botoes } from "../Styled/HomeStyled";
import {astronauta1} from "../img/astronauta1.png"


export default function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <div>
                <Letras>Bem vindo ao <Letras2>LabeX</Letras2></Letras>
                <img src={'../img/astronauta1.png'}/>
                <ContainerBotoes>
                <Botoes variant="outlined" size="large" onClick={() => goToLogin(navigate)}>LOGIN</Botoes>
                <Botoes variant="contained" size="large" onClick={() => goToTripsList(navigate)}>VER VIAGENS</Botoes>
                </ContainerBotoes>
            </div>
        </ContainerGeral>
    )
}