import { Container, ContainerInput } from "./style"


export const Input = ({ label, register, name, error, ...rest }) => {


    return (
        <Container>
            <div>{label} {!!error && <span> - {error}</span>} </div>
            <ContainerInput isErrored={!!error}>
                <input  {...register(name)} {...rest} />
            </ContainerInput>
        </Container>
    )
}