import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { URL_BASE } from "../components/UrlBase";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerForm, Inputs, ContainerGeral, Astronauta, Botoes } from "../Styled/StyledApplyForm"
import useForm from "../Hooks/useForm";
import { goToTripsList, goToErrorPage } from "../Routes/RouteFunctions";
import astronauta2 from "../img/astronauta2.png"

function ApplicationFormPage() {

    const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();


    const apllyToTrip = (event) => {
        event.preventDefault();
        setLoading(true);

        axios.post(`${URL_BASE}/trips/${id}/apply`, form)
            .then(() => {
                setLoading(false)
                alert("Obrigada por se inscrever")
                cleanFields()
                goToTripsList(navigate)
            })
            .catch((error) => {
                setLoading(false)
                setError(error.data)
                cleanFields()
            })
    };

    console.log('form', form)
    return (
        <div>
            <Header
                nome={"forms"}
            />
            
            {/* {loading && <CircularProgress />} */}
            {!loading && error && goToErrorPage(navigate)}
            <ContainerGeral>
            <Astronauta src={astronauta2} alt="astronauta"/>
                <ContainerForm onSubmit={apllyToTrip}>
                    <Inputs
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        name={"name"}
                        required
                    ></Inputs>
                    <Inputs
                        value={form.age}
                        onChange={onChange}
                        placeholder={"Idade"}
                        name={"age"}
                        min={18}
                        required
                    ></Inputs>
                    <Inputs
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder={"Porquê quer viajar"}
                        name={"applicationText"}
                    ></Inputs>
                    <Inputs
                        value={form.profession}
                        onChange={onChange}
                        placeholder={"Profissão"}
                        name={"profession"}
                    ></Inputs>
                    <Inputs
                        value={form.country}
                        onChange={onChange}
                        placeholder={"País"}
                        name={"country"}
                        required
                    ></Inputs>

                    <Botoes variant="outlined">Apply</Botoes>
                </ContainerForm>
            </ContainerGeral>
        </div >
    )
}

export default ApplicationFormPage;