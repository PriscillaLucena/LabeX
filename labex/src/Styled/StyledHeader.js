import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    font-family: 'Advent Pro';
    font-size: 2rem;
    color: grey;
    height: 25vh;

    h2{
        margin-left: 25%;
        color: #B22222;
        text-shadow: black 0.1em 0.1em 0.2em
    }

    button{
        margin-left: 25%;
    }
`

export const Botoes = styled.button`
    height: 5vh;
    width: 15vh;
    background-color: #9932CC;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Advent Pro';
    font-weight: 600;
    font-size: 1.1rem;
    color: #00008B;
    text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
        0 0 0.2em #87F;
`