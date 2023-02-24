import React, { useEffect, useState } from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
// import Button from '@mui/material/Button';

export default function TripDetailsPage() {

    useProtectedPage();

    const [detail, setDetail] = useState({})
    const [candidatos, setCandidatos] = useState([])
    const [approved, setApproved] = useState([])
    const { id } = useParams()

    console.log('candidatos', candidatos)
    console.log('detail', detail)
    console.log('approved', approved)

    useEffect(() => {getCandidatos()}, [id]);
       const getCandidatos = () => {

     axios.get(`${URL_BASE}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setDetail(response.data.trip)
                setApproved(response.data.trip.approved)
                setCandidatos(response.data.trip.candidates)
            })
            .catch((error) => {
                console.log(error.response)
            })
        }

    useEffect(() => {decideCandidate()}, [id]);

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

    }

    const listaCandidatos = candidatos.map((cand) => {
        return <div key={cand.id}>
            <p>Nome:{cand.name}</p>
            <p>Texto: {cand.applicationText}</p>
            <p>Idade: {cand.age}</p>
            <p>País: {cand.country}</p>
            <button variant="outlined" onClick={() => decideCandidate(true, cand.id)} >aceitar</button>
            <button variant="outlined" onClick={() => decideCandidate(false, cand.id)} >reprovar</button>
            {/* {decideCandidate === true ? listaCandidatos : listaVazia} */}
        </div>
    })

    return (
        <div>
            <Header
                nome={"trips detail"}
            />

            <h3>Viagem: {detail.name}</h3>
            <p><strong>Descrição:</strong>{detail.description}</p>
            <p><strong>Planeta:</strong>{detail.planet}</p>
            <p><strong>Data:</strong>{detail.date}</p>
            <p><strong>Duração:</strong>{detail.durationInDays}</p>
            <h3><strong>Candidatos:</strong></h3>
            {listaCandidatos}
        </div>
    )
}