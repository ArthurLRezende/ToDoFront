import { useState, useEffect } from 'react'
import './ToDo.css'
import { useNavigate } from 'react-router-dom';
import { pegartarefas } from '../helpers/data';
import CadastroTarefa from './components/cadastrarTarefa';
import Insight from './components/insightgpt';
import ListaTarefas from './components/listaTarefas';
import InfoTarefa from './components/InfoTarefas';
import Grafico from './components/grafico';

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
                        <h1 className="titulo-tarefa">Cadastre sua tarefa</h1>
                        <CadastroTarefa />
                    </div>
                    <div className="superior-insight">
                        <Insight />
                    </div>
                </div>
                <div className="inferior">
                    <div className="inferior-lista-tarefas">
                        <ListaTarefas />
                    </div>
                    <div className="inferior-graficos">
                        <div className="grafico">
                            <Grafico />
                        </div>
                        <div className="info">
                            {/*Total de tarefas */}
                            <div className="total-tarefas">
                                <h2>Total de tarefas</h2>
                                <h1>45</h1>
                            </div>
                            {/*Tarefas a atrasadas */}
                            <div className="atrasadas-tarefas">
                                <h2 >Tarefas atrasadas</h2>
                                <h1>7</h1>
                            </div>

                            {/*Tarefas dentro do prazo */}
                            <div className="dentro-prazo-tarefas">
                                <h2>Tarefas em prazo</h2>
                                <h1>20</h1>
                            </div>

                            {/*Tarefas concluidas */}
                            <div className="concluidas-tarefas">
                                <h2> Tarefas concluidas</h2>
                                <h1>18</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ToDo