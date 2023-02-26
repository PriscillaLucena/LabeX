import React from "react";
import { URL_BASE } from "../components/UrlBase";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import useRequestData from "../Hooks/useRequestData"
import axios from "axios";
import { goToDetailTripsList, goToErrorPage } from "../Routes/RouteFunctions";
import { ContainerCard, ContainerGeral, Botoes, ContainerBotoes } from "../Styled/StyledAdminHomePage";

export default function AdminHomePage() {

    const [data, loading, error, GetTrip] = useRequestData(`${URL_BASE}/trips`);
    const navigate = useNavigate();
    useProtectedPage();


    const deleteTrip = (id) => {
        axios.delete(`${URL_BASE}/trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            GetTrip()
            console.log("deu certo!")
        }).catch((error) => {
            console.log(error.data)
            alert("deu errado!")
        })
    }

    const listaViagens = data && data.map((viagem) => {
        return <ContainerCard key={viagem.id}>
            <h3> Viagem: {viagem.name}</h3>
            <ContainerBotoes>
            <Botoes onClick={() => goToDetailTripsList(navigate, viagem.id)}>Informações </Botoes>
            <Botoes variant="outlined" onClick={() => deleteTrip(viagem.id)}>Delete</Botoes>
            </ContainerBotoes>
        </ContainerCard>
    })

    return (
        <div>

            <Header
                nome={"admin home"}
            />
            <ContainerGeral>
                {/* {loading && <CircularProgress />} */}
                {!loading && error && goToErrorPage(navigate)}
                {!loading && data && data.length > 0 && listaViagens}
                {!loading && data && data.length === 0 && <p>Não há viagens!</p>}
            </ContainerGeral>
        </div>
    )
}