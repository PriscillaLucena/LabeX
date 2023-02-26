import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList, goToAdminTripsList, goToAdminTipsCreate, goToHome, } from "../Routes/RouteFunctions";
import { ContainerGeral, Botoes } from "../Styled/StyledHeader"

export default function Header(props) {

    const navigate = useNavigate()

    const Header = (nome) => {
        switch (nome) {
            case "trips detail":
                return <div>
                    <h2>DETALHES DAS VIAGENS</h2>
                    <Botoes variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</Botoes>
                </div>
            case "admin home":
                return <div>
                    <h2>PÁGINA DO ADMINISTRADOR</h2>
                    <Botoes variant="outlined" onClick={() => goToLogin(navigate)}>Voltar</Botoes>
                    <Botoes variant="outlined" onClick={() => goToAdminTipsCreate(navigate)}>Criar Viagem</Botoes>
                </div>
            case "create trip":
                return <div>
                    <h2>CRIAR VIAGEM</h2>
                    <Botoes variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</Botoes>
                </div>
            case "list trips":
                return <div>
                    <h2>LISTA DE VIAGENS</h2>
                    <Botoes variant="outlined" onClick={() => goToHome(navigate)}>Voltar</Botoes>
                </div>
            case "login":
                return <div>
                    <h2>LOGIN</h2>
                    <Botoes variant="outlined" onClick={() => goToHome(navigate)}>Voltar</Botoes>
                </div>
            case "forms":
                return <div>
                    <h2>FORMULÁRIO DE INSCRIÇÃO</h2>
                    <Botoes variant="outlined" onClick={() => goToTripsList(navigate)}>Voltar</Botoes>
                </div>
        }
    };

    return (
        <ContainerGeral>
            {Header(props.nome)}
        </ContainerGeral>
    )
}