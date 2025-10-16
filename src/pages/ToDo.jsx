import { useState, useEffect } from 'react'
import './ToDo.css'
import { useNavigate } from 'react-router-dom';
import { pegartarefas } from '../helpers/data';
import CadastroTarefa from './components/cadastrarTarefa';
import Insight from './components/insightgpt';

const ToDo = () => {
    
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate('/login')
    }

    useEffect(() => {
        pegartarefas()
    }, [])


    return (
        <>
            <div className="ToDo">
                <div className="cabecalho">
                    <h1 className="titulo">Organizador de tarefas</h1>
                    <button className="logout" onClick={handleLogOut}>LogOut</button>
                </div>
                <div className="superior">
                    <div className="superior-cadastro">
                        <CadastroTarefa />
                    </div>
                    <div className="superior-insight">
                        <Insight />
                    </div>
                </div>
                <div className="inferior">

                </div>
            </div>
        </>
    )

}

export default ToDo