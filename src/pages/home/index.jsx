import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Background, Container, Content } from "./style"

export const Home = ({ autenticado }) => {

    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(`/${path}`)
    }

    return (

        <Container>
            <Background />
            <Content>
                <h1>KenzieHub</h1>
                <div>
                    <Button onClick={() => handleNavigation('signin')}>Cadastre-se</Button>
                    <Button onClick={() => handleNavigation('login')} whiteTheme>Login</Button>
                </div>
                <div>
                    <p>Faça parte da maior e melhor comunidade de
                        desenvolvedores do Brasil e venha nos mostrar quais
                        tecnologias você sabe ou está aprendendo no momento.</p>
                </div>
            </Content>
        </Container>
    )
}