import { Container } from "./style"

export const Button = ({children, whiteTheme = false, ...rest}) => {

    return (
        <Container whiteTheme={whiteTheme} type='button' {...rest}>
            {children}
        </Container>
    )
}