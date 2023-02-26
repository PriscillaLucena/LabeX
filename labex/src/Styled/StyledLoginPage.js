import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    background-size: cover; 
    font-family: 'Advent Pro';
    position: relative;
    height: 86vh;
`
export const Astronauta = styled.img`
    width: 20%;
    height: auto;
    position: absolute;
    top: 18%;
    left: 50%;
`

export const ContainerForm = styled.form`
    display: flex;
    align-items: center;    
    margin-top: 5%;
    margin-left: 25%;
    border: 1px solid;
    padding: 1.2rem;
    border-radius: 10px 30px;
    flex-direction: column;
    row-gap: 1rem;
    width: 30%;
    background: linear-gradient(#e66465, #BA55D3);
`

export const Inputs = styled.input`
    border: 1px solid grey;
    border-radius: 7px;
    height: 2.2rem;
    width: 95%;
    font-family: 'Advent Pro';
    font-weight: 200;
    font-size: 1.1rem;
    padding: 1vh;
    opacity: none;
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

