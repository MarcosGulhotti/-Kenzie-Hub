import { Header } from "../../components/Header";
import { Button } from '../../components/Button'
import { ModalTec } from "../../components/Modal";
import { Container, Tech, User, Content } from "./style";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const cancelTokenSource = axios.CancelToken.source();

export const Dashboard = ({ autenticado, setAutenticado, nome, tec, id }) => {

    const [show, setShow] = useState([])


    const [token] = useState(
        JSON.parse(localStorage.getItem("@KenzieHub:token")) || ''
    )

    useEffect(() => {
        teste()
        return () => { cancelTokenSource.cancel('') }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function teste() {
        api.get(`/users/${id}`, {
            cancelTokenSource
        })
            .then((resp) => setShow(resp.data.techs))
            .catch((e) => console.log(e))
    }


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
                        {show.map((elm, i) => <ModalTec key={i} id={elm.id} show={show} deleteTech={deleteTech} title={elm.title} status={elm.status} />)}
                    </section>
                </Content>
            </Container>
        </>
    )
}