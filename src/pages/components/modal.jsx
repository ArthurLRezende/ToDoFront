import { useState, useEffect } from 'react'
import './modal.css'
import { atualizarTarefa, concluirTarefa, deletarTarefa } from '../../helpers/data';

const ModalTarefas = ({ tarefaSelecionada, show, onClose, refresh }) => {
    const [descricao, setDescricao] = useState('')
    const [status, setStatus] = useState('')
    const [urgencia, setUrgencia] = useState('')
    const [novaData, setNewData] = useState('')

    useEffect(() => {
        if (tarefaSelecionada) {
            setDescricao(tarefaSelecionada.descricao || '')
            setStatus(tarefaSelecionada.status || '')
            setUrgencia(tarefaSelecionada.urgencia || '')
            setNewData(tarefaSelecionada.dataPrazo || '')
        }
    }, [tarefaSelecionada])

    if (!show) return null

    const handleAtualizar = async () => {
        const tarefaAtualizada = {
            ...tarefaSelecionada,
            descricao,
            status,
            urgencia,
            novaData
        }
        const response = await atualizarTarefa(tarefaAtualizada);
        if(response){
            refresh()
            onClose() 
        }else{
            alert('Erro ao atualizar a tarefa')
            onClose()
        }
    }

    const handleConcluir = async() => {
        const response = await concluirTarefa(tarefaSelecionada.id)
            if(response){
            refresh()
            onClose() 
        }else{
            alert('Erro ao concluir a tarefa')
            onClose()
        }
    }

    const handleDeletar = async () => {
        const reponse = await deletarTarefa(tarefaSelecionada.id)

        if(reponse){
            refresh()
            onClose()
        }else{
            alert('Erro ao deletar a tarefa')
            onClose()
        }
        
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✕</button>

                {tarefaSelecionada && (
                    <>
                        <h2 className="modal-title">{tarefaSelecionada.titulo}</h2>

                        <div className="modal-section-descricao">
                            <label>Descrição:</label>
                            <textarea
                                className="modal-input-descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>

                        <div className="modal-section-status">
                            <label>Status:</label>
                            <textarea
                                className="modal-input-status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />

                        </div>

                        <div className="modal-section-urgencia">
                            <label>Urgência:</label>
                            <select
                                className="modal-input-urgencia"
                                value={urgencia}
                                onChange={(e) => setUrgencia(e.target.value)}>
                                <option value="Baixa">Baixa</option>
                                <option value="Media">Média</option>
                                <option value="Alta">Alta</option>
                            </select>
                        </div>

                        <div className="modal-section-data">
                            <p className="modal-info">
                                <strong>Dias restantes:</strong> {tarefaSelecionada.diasRestantes}
                            </p>
                            <input onChange={(e) => { setNewData(`${e.target.value}`) }}
                                type="date"
                                className='modal-input-data'
                                value={novaData} />
                        </div>
                        <div className="modal-buttons">
                            <button className="btn delete" onClick={handleDeletar}>Deletar</button>
                            <button className="btn complete" onClick={handleConcluir}>Concluir</button>
                            <button className="btn update" onClick={handleAtualizar}>Atualizar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalTarefas;
