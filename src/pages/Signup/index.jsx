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


export const Signup = () => {

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!').max(24, 'Maximo de 24 caracteres'),
        email: yup.string().email('Email Invalido').required('Campo obrigatório!'),
        password: yup.string().min(8, 'Mínimo de 8 digitos').required('Campo obrigatório!'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas Diferentes').required('Campo obrigatório!'),
        contact: yup.string().required('Campo obrigatório'),
        course_module: yup.string().required('Campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = ({ name, email, password, contact, course_module, bio = 'bio' }) => {
        const user = { name, email, password, contact, course_module, bio };

        api
            .post('/users', user)
            .then((_) => {
                toast.success('Conta criada com sucesso!')
                return history.push('/login')
            }
            ).catch((_) => toast.error('Erro ao criar a conta'))
    }


    return (
        <Animation>
            <Header>KenzieHub</Header>
            <Container>
                <Content>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Cadastre-se</h1>
                        <Input error={errors.name?.message} name='name' register={register} placeholder='Coloque seu nome' label='Nome' />
                        <Input error={errors.email?.message} name='email' register={register} placeholder='Coloque seu email' label='Email' />
                        <Input type='password' error={errors.password?.message} name='password' register={register} placeholder='Coloque sua senha' label='Senha' />
                        <Input type='password' error={errors.passwordConfirm?.message} name='passwordConfirm' register={register} placeholder='Confirme sua senha' label='Confirmar Senha' />
                        <Input error={errors.contact?.message} name='contact' register={register} placeholder='Coloque seu linkedin' label='Contato/Linkedin' />
                        <Input error={errors.course_module?.message} name='course_module' register={register} placeholder='Coloque o módulo que está' label='Módulo' />
                        <Button type='submit' whiteTheme>Criar Conta</Button>
                        <p>Já tem uma conta? <span><Link to='/login'>Login</Link></span></p>
                    </form>
                </Content>
            </Container>
        </Animation>
    )
}