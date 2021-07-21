import { Redirect, useHistory } from "react-router-dom"
import { Header } from "../../components/Header";
import { Container, Modal, User } from "./style";
import { Content } from "./style";
import { Button } from '../../components/Button'
import { Input } from "../../components/Input";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { useState } from "react";
import toast from "react-hot-toast";

export const AddTech = ({ autenticado }) => {

    const history = useHistory()
    const [token] = useState(
        JSON.parse(localStorage.getItem("@KenzieHub:token")) || ''
    )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório!').max(10, 'Máximo de 10 caracteres'),
        status: yup.string().required('Campo obrigatório!').max(224, 'Máximo de 224 caracteres'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        api.post('/users/techs', data,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {

                toast.success('Tecnologia adicionada!!')

                history.push('/dashboard')
            }).catch((e) => toast.error('Acho que voce já sabe usar isto rs'))
    }

    if (autenticado === false) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Header>KenzieHub</Header>
            <Container>
                <Content>
                    <User><Button onClick={() => history.push('/dashboard')} whiteTheme>Cancelar</Button></User>
                    <Modal>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Adicionar Tecnologia</h1>
                            <Input error={errors.title?.message} name='title' register={register} placeholder='Adicione uma tecnologia *' label='Tecnologia' />
                            <Input error={errors.status?.message} name='status' register={register} placeholder='Fale sobre a tecnologia *' label='BIO' />
                            <Button type='submit' whiteTheme>Adicionar</Button>
                        </form>
                    </Modal>
                    
                </Content>

            </Container>
        </>
    )
}