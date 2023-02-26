import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    background-size: cover; 
    font-family: 'Advent Pro';
    font-weight: 300;
    font-size: 1.2rem;
    color: #D3D3D3;
`

export const CardInfoViagem = styled.div`´
    display: flex;
    flex-direction; column;
    border: 1px solid #191970;
    border-radius: 10px;
    background: linear-gradient(#BA55D3, #191970);
    font-weight: 400;
    width: 40%;
    padding: 2rem;
    margin-top: 1rem;
`

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-content: center;
    margin: 2rem;
    width: 90%;
`

export const CardViagem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #191970;
    border-radius: 10px;
    background: linear-gradient(#BA55D3, #191970);
    padding: 2rem;
    align-items: center;
    width: 70%;
`

export const CardAprovados = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(#BA55D3, #191970);
    padding: 2rem;
    align-items: center;
    font-weight: 400;
    font-size: 1.4rem;
    width: 30%;
    border: 1px solid #191970;
    border-radius: 10px;
`

export const Centraliza = styled.h3`
    display: flex;
    align-items: center;
`

export const Botoes = styled.button`
    height: 5vh;
    width: 15vh;
    background-color: #9932CC;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Advent Pro';
    font-size: 1rem;
`
export const ContainerBotoes = styled.span`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const Astronauta = styled.img`
    width: 15%;
    height: auto;
    position: absolute;
    top: 33%;
    left: 57%;
`