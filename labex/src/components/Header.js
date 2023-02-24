import { useNavigate } from "react-router-dom";
import { goToLogin, goToTripsList, goToAdminTripsList, goToAdminTipsCreate, goToHome, } from "../Routes/RouteFunctions";

export default function Header(props) {

    const navigate = useNavigate()

    const Header = (nome) => {
        switch (nome) {
            case "trips detail":
                return <div>
                    <h2>DETALHES DAS VIAGENS</h2>
                    <button variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</button>
                </div>
            case "admin home":
                return <div>
                    <h2>ADMIN HOME</h2>
                    <button variant="outlined" onClick={() => goToLogin(navigate)}>Voltar</button>
                    <button variant="outlined" onClick={() => goToAdminTipsCreate(navigate)}>Criar Viagem</button>
                </div>
            case "create trip":
                return <div>
                    <h2>CRIAR VIAGEM</h2>
                    <button variant="outlined" onClick={() => goToAdminTripsList(navigate)}>Voltar</button>
                </div>
            case "list trips":
                return <div>
                    <h2>LISTA DE VIAGENS</h2>
                    <button variant="outlined" onClick={() => goToHome(navigate)}>Voltar</button>
                </div>
            case "login":
                return <div>
                    <h2>LOGIN</h2>
                    <button variant="outlined" onClick={() => goToHome(navigate)}>Voltar</button>
                </div>
            case "forms":
                return <div>
                    <h2>FORMULÁRIO DE INSCRIÇÃO</h2>
                    <button variant="outlined" onClick={() => goToTripsList(navigate)}>Voltar</button>
                </div>
        }
    };

    return (
        <div>
            {Header(props.nome)}
        </div>
    )
}