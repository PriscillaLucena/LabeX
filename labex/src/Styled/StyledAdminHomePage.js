import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    background-size: cover; 
    font-family: 'Advent Pro';
    font-weight: 300;
    font-size: 1.2rem;
    color: #C0C0C0;
    text-shadow: black 0.1em 0.1em 0.2em;
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 2rem;
    border: 1px solid;
    border-radius: 10px;
    background: linear-gradient(#e66465, #9198e5);
    border-color: #8A2BE2;
`
export const ContainerBotoes = styled.span`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Botoes = styled.button`
    height: 5vh;
    width: 15vh;
    background-color: #8A2BE2;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Advent Pro';
    font-weight: 600;
    font-size: 1.1rem;
    color: #00008B;
    text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
        0 0 0.2em #87F;
`
