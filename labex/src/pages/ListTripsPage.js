import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData";
import Header from "../components/Header";
import { goToAplly, goToErrorPage } from "../Routes/RouteFunctions";
import { URL_BASE } from "../components/UrlBase";
import { ContainerGeral, ContainerCard, Botoes } from "../Styled/StyledListTripsPage";


export default function ListTripsPage() {

    const navigate = useNavigate()

    const [data, loading, error] = useRequestData(`${URL_BASE}/trips`)

    const listaViagens = data && data.map((viagem) => {
        return <ContainerCard key={viagem.id}>
            <h3 >Viagem: {viagem.name}</h3>
            <p ><strong>Descrição:</strong> {viagem.description}</p>
            <p ><strong>Planeta:</strong> {viagem.planet}</p>
            <p ><strong>Data:</strong> {viagem.date}</p>
            <p ><strong>Duração:</strong> {viagem.durationInDays}</p>
            <Botoes variant="outlined" onClick={() => goToAplly(navigate, viagem.id)}>Inscrever</Botoes>
        </ContainerCard>
    })

    return (
        <div>
            
                <Header
                    nome={"list trips"}
                />
                <ContainerGeral>
                {/* 
            {loading && <CircularProgress />} */}
                {!loading && error && goToErrorPage(navigate)}
                {!loading && data && data.length > 0 && listaViagens}
                {!loading && data && data.length === 0 && <p>Não há viagens!</p>}


            </ContainerGeral>
        </div>
    )
}