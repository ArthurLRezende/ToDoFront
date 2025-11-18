import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { atualizarTarefa, concluirTarefa, deletarTarefa } from "../helpers/data";

const ModalTailwind = ({ tarefa, show, onClose, refresh }) => {

    const [titulo, setNovoTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [urgencia, setUrgencia] = useState("");
    const [novaData, setNewData] = useState("");

    useEffect(() => {
        if (tarefa) {
            setNovoTitulo(tarefa.Titulo || "");
            setDescricao(tarefa.Descricao || "");
            setStatus(tarefa.Status || "");
            setUrgencia(tarefa.Urgencia || "");
            setNewData(tarefa.DataPrazo || "");
        }
    }, [tarefa]);
    
    const handleAtualizar = async () => {
            const tarefaAtualizada = {
                ...tarefa,
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
            const response = await concluirTarefa(tarefa.id)
                if(response){
                refresh()
                onClose() 
            }else{
                alert('Erro ao concluir a tarefa')
                onClose()
            }
        }
    
        const handleDeletar = async () => {
            const reponse = await deletarTarefa(tarefa.id)
    
            if(reponse){
                refresh()
                onClose()
            }else{
                alert('Erro ao deletar a tarefa')
                onClose()
            }
            
        }

    if (!show) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">

                <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full h-full p-6 overflow-y-auto md:w-[600px] md:h-[800px] md:rounded-xl md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 hover:scale-110 transition"
                    >
                        <IoMdClose size={32} color="#ddd" />
                    </button>

                    <div className="space-y-4 mt-10">

                        <div>
                            <label className="text-sm">Título</label>
                            <input
                                type="text"
                                className="bg-gray-600 w-full p-2 rounded"
                                value={titulo}
                                onChange={(e) => setNovoTitulo(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Descrição</label>
                            <textarea
                                type="text"
                                className="bg-gray-600 w-full min-h-72 md:min-h-60 p-2 rounded"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Status</label>
                            <input
                                type="text"
                                className="bg-gray-600 w-full p-2 rounded"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="text-sm">Urgência</label>
                            <select name="" id="" value={urgencia}  className="bg-gray-600 w-full p-2 rounded" onChange={(e) => setUrgencia(e.target.value)}>
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baixa">Baixa</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm">Prazo</label>
                            <input 
                            type="date" 
                            className="bg-gray-600 w-full p-2 rounded"
                            value={novaData} 
                            onChange={(e) => setNewData(e.target.value)} />
                        </div>

                        <div className="w-full flex justify-center place-content-between gap-8 mt-10">
                            <button className="w-1/4 bg-red-700 p-3 rounded-md active:translate-y-0.5" onClick={handleDeletar}>Deletar</button>
                            <button className="w-2/4 bg-blue-700 p-3 rounded-md active:translate-y-0.5" onClick={handleAtualizar}>Atualizar</button>
                            <button className="w-1/4 bg-green-700 p-3 rounded-md active:translate-y-0.5" onClick={handleConcluir}>Concluir</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalTailwind;
