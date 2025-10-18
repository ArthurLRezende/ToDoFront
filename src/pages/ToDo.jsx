import { useState, useEffect } from 'react'
import './ToDo.css'
import { useNavigate } from 'react-router-dom';
import { buscarInfoGerais, LogOut, pegartarefas } from '../helpers/data';
import CadastroTarefa from './components/cadastrarTarefa';
import Insight from './components/insightgpt';
import ListaTarefas from './components/listaTarefas';
import Grafico from './components/grafico';
import Footer from './components/footer';
import ModalTarefas from './components/modal';

const ToDo = () => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false)
    const [tarefaModal, settarefaModal] = useState(null)
    const [refreshLista, setRefreshLista] = useState(0)
    const [dadosGerais, setDadosGerais] = useState(null)

    const handleLogOut = () => {
        LogOut()
        navigate('/login')
    }

    const carregarDados = async () => {
        try {
            await pegartarefas()
            const response = await buscarInfoGerais()
            // console.log(response)
            setDadosGerais(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        carregarDados()
    }, [refreshLista])


    const handleRefresh = () => setRefreshLista(prev => prev + 1)//toda vez que mudar atualiza a lista

    const handleModal = (id, titulo, descricao, status, urgencia, diasRestantes, dataPrazo) => {
        const tarefa = {
            id,
            titulo,
            descricao,
            status,
            urgencia,
            diasRestantes,
            dataPrazo
        }

        settarefaModal(tarefa)
        setShowModal(true)

    }

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
                        <CadastroTarefa refresh={handleRefresh} />
                    </div>
                    <div className="superior-insight">
                        <Insight />
                    </div>
                </div>
                <div className="inferior">
                    <div className="inferior-lista-tarefas">
                        <ListaTarefas handleModal={handleModal} refresh={handleRefresh} />
                    </div>
                    <div className="inferior-graficos">
                        <div className="grafico">
                            {dadosGerais ? (
                                <Grafico refresh={handleRefresh} />
                            ) : (
                                <p>erro ao carregar o grafico</p>
                            )}
                        </div>
                        <div className="info">
                            {dadosGerais ? (
                                <>
                                    <div className="total-tarefas">
                                        <h2>Total de tarefas</h2>
                                        <h1>{dadosGerais.totalTarefas}</h1>
                                    </div>
                                    <div className="atrasadas-tarefas">
                                        <h2>Tarefas atrasadas</h2>
                                        <h1>{dadosGerais.tarefasAtrasadas}</h1>
                                    </div>
                                    <div className="dentro-prazo-tarefas">
                                        <h2>Tarefas no prazo</h2>
                                        <h1>{dadosGerais.tarefasNoPrazo}</h1>
                                    </div>
                                    <div className="concluidas-tarefas">
                                        <h2>Tarefas concluídas</h2>
                                        <h1>{dadosGerais.tarefasConcluidas}</h1>
                                    </div>
                                </>
                            ) : (
                                <p>Carregando informações...</p>
                            )}

                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            <ModalTarefas
                show={showModal} tarefaSelecionada={tarefaModal} onClose={() => setShowModal(false)} refresh={handleRefresh} />
        </>
    )

}

export default ToDo