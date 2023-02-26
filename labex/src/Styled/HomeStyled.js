import styled from "styled-components";


export const ContainerGeral = styled.div`
    width: 100%;
    height: 97vh;   
    background-image: url("https://i.pinimg.com/originals/3c/55/14/3c5514ec51d377145201b361b35b05a5.jpg");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-items: center;
    
`

export const ContainerBotoes = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-left: 75%;
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
    font-weight: 600;
    font-family: 'Advent Pro';
    font-size: 1.3rem;
    color: #00008B;
    text-shadow: 0 0 0.2em #87F, 0 0 0.2em #87F,
        0 0 0.2em #87F;
    
`
export const ContainerLetras = styled.div`
    display: flex;
    margin-left: 30%;
    width: 60vw;
`

export const Letras = styled.h1`
    font-family: 'Advent Pro';
    font-size: 4rem;
    font-weight: 500;
    color: #B22222;
    text-shadow: 0.1em 0.1em 0.2em white;
    margin-top: 5%;
`
export const Letras2 = styled.span`
    font-family: 'Advent Pro';
    font-size: 9rem;
    font-weight: 800;
    color: #4B0082;
    background: -webkit-linear-gradient( #191970, #4682B4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 9%;
`
export const Letras3 = styled.span`
    font-family: 'Advent Pro';
    font-size: 9rem;
    font-weight: 800;
    color: #4B0082;
    background: -webkit-linear-gradient( #800000, #FF6347);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 9%;
    margin-left: 1.1%;
`
   
export const Astronauta = styled.img`
    width: 10%;
    height: auto;
    position: absolute;
    top: 38%;
    left: 67%;
`