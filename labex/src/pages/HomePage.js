import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList } from "../Routes/RouteFunctions";
import { ContainerBotoes, ContainerGeral, Letras, Letras2, Botoes, Astronauta, ContainerLetras, Letras3 } from "../Styled/HomeStyled";
import astronauta1 from "../img/astronauta1.png"


export default function HomePage() {

    const navigate = useNavigate();

    return (
        <ContainerGeral>
            <div>
                <ContainerLetras>
                <Letras>Bem vindo ao</Letras><Letras2>Labe</Letras2><Letras3>X</Letras3>
                </ContainerLetras>
                <Astronauta src={astronauta1} alt="astronauta"/>
                <ContainerBotoes>
                <Botoes variant="outlined" size="large" onClick={() => goToLogin(navigate)}>login</Botoes>
                <Botoes variant="contained" size="large" onClick={() => goToTripsList(navigate)}>viagens</Botoes>
                </ContainerBotoes>
            </div>
        </ContainerGeral>
    )
}