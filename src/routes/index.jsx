import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { Signup } from "../pages/Signup";
import { Login } from '../pages/Login'
import { Dashboard } from "../pages/Dashboard";
import { AddTech } from '../pages/AddTech'
import { useEffect, useState } from "react";

export default function Routes() {

    const [autenticado, setAutenticado] = useState(false);
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')
    const [tec, setTec] = useState([])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('KenzieHub:token'));

        if (token) {
            return setAutenticado(true);
        }
    }, [autenticado])

    return (
        <Switch>
            <Route exact path='/'>
                <Home autenticado={autenticado} />
            </Route>
            <Route path='/signin'>
                <Signup autenticado={autenticado} />
            </Route>
            <Route path='/login'>
                <Login setId={setId} setNome={setNome} autenticado={autenticado} setAutenticado={setAutenticado} />
            </Route>
            <Route path='/dashboard'>
                <Dashboard id={id} tec={tec} nome={nome} autenticado={autenticado}
                    setAutenticado={setAutenticado} />
            </Route>
            <Route path='/addtech'>
                <AddTech tec={tec} setTec={setTec} autenticado={autenticado} />
            </Route>
        </Switch>
    )
}