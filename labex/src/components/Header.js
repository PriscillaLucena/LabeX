import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList, goToAdminTripsList, goToAdminTipsCreate, goToHome, } from "../Routes/RouteFunctions";
import { ContainerGeral, ContainerBotoes, Botoes, Letras, BotoesPagAdm } from "../Styled/StyledHeader"

export default function Header(props) {

    const navigate = useNavigate()

    const Header = (nome) => {
        switch (nome) {
            case "trips detail":
                return <ContainerBotoes>
                    <Letras>DETALHES DAS VIAGENS</Letras>
                    <Botoes variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</Botoes>
                </ContainerBotoes>
            case "admin home":
                return <ContainerBotoes>
                    <Letras>PÁGINA DO ADMINISTRADOR</Letras>
                    <BotoesPagAdm variant="outlined" onClick={() => goToLogin(navigate)}>Voltar</BotoesPagAdm>
                    <BotoesPagAdm variant="outlined" onClick={() => goToAdminTipsCreate(navigate)}>Criar Viagem</BotoesPagAdm>
                </ContainerBotoes>
            case "create trip":
                return <ContainerBotoes>
                    <Letras>CRIAR VIAGEM</Letras>
                    <Botoes variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</Botoes>
                </ContainerBotoes>
            case "list trips":
                return <ContainerBotoes>
                    <Letras>LISTA DE VIAGENS</Letras>
                    <Botoes variant="outlined" onClick={() => goToHome(navigate)}>Voltar</Botoes>
                </ContainerBotoes>
            case "login":
                return <ContainerBotoes>
                    <Letras>LOGIN</Letras>
                    <Botoes variant="outlined" onClick={() => goToHome(navigate)}>Voltar</Botoes>
                </ContainerBotoes>
            case "forms":
                return <ContainerBotoes>
                    <Letras>FORMULÁRIO DE INSCRIÇÃO</Letras>
                    <Botoes variant="outlined" onClick={() => goToTripsList(navigate)}>Voltar</Botoes>
                </ContainerBotoes>
        }
    };

    return (
        <ContainerGeral>
            {Header(props.nome)}
        </ContainerGeral>
    )
}