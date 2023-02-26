import React, { useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import Header from "../components/Header";
import axios from "axios";
import { goToErrorPage } from "../Routes/RouteFunctions";
import { useNavigate } from "react-router-dom";
import { ContainerGeral, Botoes, ContainerForm, Inputs, Astronauta } from "../Styled/StyledCreateTrip";
import astronauta5 from "../img/astronauta5.png"


export default function CreateTripPage() {

    useProtectedPage();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [durationInDays, setDurationInDays] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //endpoint create trip

    const createTrip = async () => {
        setLoading(true)
        const body =
        {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        try {
            const response = await axios.post(`${URL_BASE}/trips`, body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            });
            console.log(response.data)
            setLoading(false)
            alert("Viagem criada!")
            limpaInput()
        } catch (error) {
            setLoading(false)
            setError(error.response)
            alert("deu erro!")
        }
    }


    const limpaInput = () => {
        return setName(""),
            setPlanet(""),
            setDate(""),
            setDescription(""),
            setDurationInDays("")
    }

    return (
        <div>
            <Header
                nome={"create trip"}
            />
            <ContainerGeral>
                {!loading && error && goToErrorPage(navigate)}
                <Astronauta src={astronauta5} alt="astronauta" />
                <ContainerForm>
                    <Inputs
                        placeholder="Nome Viagem"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />

                    <Inputs
                        placeholder="Nome Planeta"
                        onChange={(e) => setPlanet(e.target.value)}
                        value={planet} />

                    <Inputs
                        placeholder="Data Viagem"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}></Inputs>

                    <Inputs
                        placeholder="Descrição Viagem"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />

                    <Inputs
                        placeholder="Duração em dias"
                        onChange={(e) => setDurationInDays(e.target.value)}
                        value={durationInDays} />

                    <Botoes variant="outlined" onClick={() => createTrip()}>Enviar</Botoes>
                </ContainerForm>
            </ContainerGeral>
        </div>
    )
}