import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from '../../components/Button'
import { Container, Content, Animation } from "./style"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import toast from "react-hot-toast";


export const Login = ({setAutenticado, setNome, setId}) => {

    const history = useHistory();


    const schema = yup.object().shape({
        email: yup.string().email('Email Invalido').required('Campo obrigatório!'),
        password: yup.string().min(8, 'Mínimo de 8 digitos').required('Campo obrigatório!'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)

        api.post('/sessions', data).then((resp) => {

            console.log(resp.data)

            const { token } = resp.data

            localStorage.setItem('@KenzieHub:token', JSON.stringify(token))

            setAutenticado(true)

            setId(resp.data.user.id)

            setNome(resp.data.user.name)

            toast.success(`Bem vindo ${resp.data.user.name}`)
            
            history.push(`/dashboard`);
            
        }).catch((e) => toast.error('Email ou senha inválidos'))
    }

    return (
        <Animation>
            <Header>KenzieHub</Header>
            <Container>
                <Content>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Login</h1>
                        <Input error={errors.email?.message} name='email' register={register} placeholder='Coloque seu email' label='Email' />
                        <Input error={errors.password?.message} name='password' register={register} placeholder='Coloque sua senha' label='Senha' />
                        <Button type='submit' whiteTheme>Entrar</Button>
                        <p>Ainda não tem uma conta? <span><Link to='/signin'>Faça seu cadastro</Link></span></p>
                    </form>
                </Content>
            </Container>
        </Animation>
    )
}