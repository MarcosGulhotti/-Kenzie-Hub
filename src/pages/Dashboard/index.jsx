import { Redirect, useHistory } from "react-router-dom"
import { Header } from "../../components/Header";
import { Container, Tech, User } from "./style";
import { Content } from "./style";
import { Button } from '../../components/Button'
import { useEffect, useState } from "react";
import { ModalTec } from "../../components/Modal";
import api from "../../services/api";
import toast from "react-hot-toast";

export const Dashboard = ({ autenticado, setAutenticado, nome, tec, id }) => {

    const [show, setShow] = useState([])

    const [token] = useState(
        JSON.parse(localStorage.getItem("@KenzieHub:token")) || ''
    )


    useEffect(() => {
        api.get(`/users/${id}`)
            .then((resp) => setShow(resp.data.techs))
            .catch((e) => console.log(e))
    }, [])

    const history = useHistory()

    const deleteTech = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((_) => setShow(show.filter((elm) => elm.id !== id)))
        .catch((e) => console.log(e))
    }

    console.log(tec)


    if (!autenticado) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Header>KenzieHub</Header>
            <Container>
                <Content props={show.length}>
                    <User>
                        <h1>Usuario: {nome}!</h1>
                        <Button onClick={() => {
                            localStorage.clear()
                            setAutenticado(false)
                            toast('BYE BYE', {
                                icon: '👋'
                            })
                            history.push('/')
                        }} whiteTheme>Logout</Button>
                    </User>
                    <Tech>
                        <Button onClick={() => show.length < 8 ? history.push('/addtech') : toast.error('Você atingiu o limite de tecnologias :(')}>Adicionar Tecnologia</Button>
                    </Tech>
                    <section>
                        {show.map((elm, i) => <ModalTec id={elm.id} show={show} deleteTech={deleteTech} title={elm.title} status={elm.status} />)}
                    </section>
                </Content>
            </Container>
        </>
    )
}