import { Container } from "./style"

export const Header = ({ children }) => {

    return (
        <Container>
            <h1>{children}</h1>
        </Container>
    )
}