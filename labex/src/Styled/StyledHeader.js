import styled from "styled-components";

export const ContainerGeral = styled.div`
    flex-direction: column;
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    height: 20vh;    
`

export const ContainerBotoes = styled.div`
/* display: grid;
    grid-template-rows: 3fr, 1fr; */
    display: flex;
    height: 90%;
`

export const Letras = styled.h2`
        /* width: 70vw; */
        margin-left: 10%;
        font-family: 'Advent Pro';
        font-size: 3.4rem;
        color: #B22222;
        text-shadow: black 0.1em 0.1em 0.2em;
`

export const Botoes = styled.a`
        margin-top: 7%;
        margin-left: 30%;
        cursor: pointer;
        font-family: 'Advent Pro';
        font-weight: 600;
        font-size: 1.3rem;
        color: #00008B;
        text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
            0 0 0.2em #87F;
`


export const BotoesPagAdm = styled.a`
        margin-top: 7%;
        margin-left: 10%;
        cursor: pointer;
        font-family: 'Advent Pro';
        font-weight: 600;
        font-size: 1.3rem;
        color: #00008B;
        text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
            0 0 0.2em #87F;
`