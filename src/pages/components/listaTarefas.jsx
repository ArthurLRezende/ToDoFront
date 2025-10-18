import { useState, useEffect } from 'react'
import './listaTarefas.css'
import { pegartarefas } from '../../helpers/data'
import { SlOptionsVertical } from "react-icons/sl";
import ModalTarefas from './modal';

const ListaTarefas = ({ handleModal, refresh}) => {

    const [tarefas, setTarefas] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchDados = async () => {
        try {
            const response = await pegartarefas()
            console.log(response)
            if (response) setTarefas(response)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log("Atualizando lista de tarefas...");
        fetchDados()
    }, [refresh])


    return (<>
        <div className="tarefas">
            <div className="tarefas-cabecalho">
                <div className="titulo-tarefa-cabecalho">Titulo</div>
                <div className="descricao-tarefa-cabecalho">Descricao</div>
                <div className="status-tarefa-cabecalho">Status</div>
                <div className="urgencia-tarefa-cabecalho">Urgencia</div>
                <div className="diasRestantes-tarefa-cabecalho">DiasRestantes</div>
                <div className="opcoes-cabecalho">Opcoes</div>
            </div>
            {loading ? (
                <p>Carregando tarefas...</p>
            ) : tarefas.length > 0 ? (
                <div className="tarefas-box">
                    {tarefas.map(tarefa => (

                        <div className="linhaTarefa" key={tarefa.id}>
                            <div className="titulo-tarefa-lista">{tarefa.titulo}</div>
                            <div className="descricao-tarefa-lista">{tarefa.descricao}</div>
                            <div className="status-tarefa-lista">{tarefa.status}</div>
                            <div className="urgencia-tarefa-lista">{tarefa.urgencia}</div>
                            <div className="diasRestantes-tarefa-lista">{tarefa.diasRestantes}</div>
                            <div className="opcoes" onClick={() => {
                                handleModal(
                                    tarefa.id,
                                    tarefa.titulo,
                                    tarefa.descricao,
                                    tarefa.status,
                                    tarefa.urgencia,
                                    tarefa.diasRestantes,
                                    tarefa.dataPrazo
                                )
                            }}>
                                <SlOptionsVertical color='#ddd' /></div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="semtarefa">Sem tarefas cadastradas até o momento</p>
            )}
        </div>

    </>)

}

export default ListaTarefas