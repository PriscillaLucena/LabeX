import React, { useEffect, useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage"
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { goToErrorPage } from "../Routes/RouteFunctions";
import { ContainerGeral, CardInfoViagem, ContainerCard, CardViagem, CardAprovados, Centraliza, Botoes, ContainerBotoes,
    Astronauta } from "../Styled/StyledTripDetails";
import astrouauta4 from "../img/astronauta4.png"

export default function TripDetailsPage() {

    useProtectedPage();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [detail, setDetail] = useState({});
    const [candidatos, setCandidatos] = useState([]);
    const [approved, setApproved] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => { getCandidatos() });
    const getCandidatos = () => {
        setLoading(true)
        axios.get(`${URL_BASE}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setLoading(false)
                setDetail(response.data.trip)
                setApproved(response.data.trip.approved)
                setCandidatos(response.data.trip.candidates)
            })
            .catch((error) => {
                setLoading(false)
                setError(error.response)
                console.log(error.response)
            })
    }

    const decideCandidate = (approve, candId) => {
        const body = {
            approve: approve
        }
        axios.put(`${URL_BASE}/trips/${id}/candidates/${candId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            if (approve) {
                alert("Candidato aprovado!")
                getCandidatos()
            } else {
                alert("Candidato reprovado!")
            };

        }).catch((error) => {
            console.log(error.response.data)
        })

    };

    const listaCandidatos = candidatos.map((cand) => {
        return <CardViagem key={cand.id}>
            <p><strong>Nome:</strong>{cand.name}</p>
            <p><strong>Texto:</strong> {cand.applicationText}</p>
            <p><strong>Idade:</strong> {cand.age}</p>
            <p><strong>País:</strong> {cand.country}</p>
            <ContainerBotoes>
                <Botoes variant="outlined" onClick={() => decideCandidate(true, cand.id)} >ACEITAR</Botoes>
                <Botoes variant="outlined" onClick={() => decideCandidate(false, cand.id)} >REPROVAR</Botoes>
            </ContainerBotoes>
        </CardViagem>
    });

    const listaAprovados = approved.map((cand) => {
        return <div>
            <p>{cand.name}</p>
        </div>
    });

    return (
        <div>
            <Header
                nome={"trips detail"}
            />
            <ContainerGeral>
                {!loading && error && goToErrorPage(navigate)}
                <CardInfoViagem>
                    <h3>Viagem: {detail.name}</h3>
                    <p><strong>Descrição:</strong>{detail.description}</p>
                    <p><strong>Planeta:</strong>{detail.planet}</p>
                    <p><strong>Data:</strong>{detail.date}</p>
                    <p><strong>Duração:</strong>{detail.durationInDays}</p>
                    <h3><strong>Candidatos:</strong></h3>
                    <Astronauta src={astrouauta4} alt="astronauta"/>
                </CardInfoViagem>
                <ContainerCard>
                    {candidatos.length > 0 ? listaCandidatos : <Centraliza>Ainda não há ninguém inscrito!</Centraliza>}
                </ContainerCard>
                <CardAprovados>
                    <h4>Candidatos aprovados:</h4>
                    {approved.length > 0 ? listaAprovados : <Centraliza>Ainda não há ninguém aprovado!</Centraliza>}
                </CardAprovados>
            </ContainerGeral>
        </div>
    )
}