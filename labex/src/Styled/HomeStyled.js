import styled from "styled-components";


export const ContainerGeral = styled.div`
    width: 100%;
    height: 97vh;   
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    background-size: cover;
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-items: center;
    
`

export const ContainerBotoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const Botoes = styled.button`
    display: flex;
    align-items: center;
    padding: 1rem;
    weight: 4rem;
    height: 3rem;
    font-size: 1.2rem;
    border-radius: 10px 20px;
    background-color: #BA55D3;
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 600;
    color: #800080;
`

export const Letras = styled.h1`
    font-family: 'Advent Pro';
    font-size: 4rem;
    font-weight: 500;
    color: #B22222;
`
export const Letras2 = styled.span`
    font-family: 'Advent Pro';
    font-size: 5rem;
    font-weight: 800;
    color: #800080;
`
   
export const Astronauta = styled.img`
    width: 10%;
    height: auto;
    position: absolute;
    top: 40%;
    left: 70%;
`