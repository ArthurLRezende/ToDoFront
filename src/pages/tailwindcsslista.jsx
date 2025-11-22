import { IoOptions } from "react-icons/io5";
import { useState, useEffect } from "react"
import { pegartarefas } from "../helpers/data";

//Componente de lista dentro da home
const TailwindLista = ({ handleModal, refresh }) => {

    //Constantes de controle
    const [tarefas, setTarefas] = useState(null)

    //Func que chama a funcão 
    const fetchDados = async () => {
        try {
            const response = await pegartarefas()
            // console.log(response)
            if (response) setTarefas(response)
        } catch(error) {
            console.log(error)
        }
    }
    
    //Func para toda vez que refresh for alterado recarrega os dados neste componente
    useEffect(() => {
        fetchDados()
    }, [refresh])

    if (!tarefas) return (<>
        <div className="w-full h-full flex items-center justify-center">
            <p className="font-kanit uppercase text-2xl justify-center text-red-600">Sem dados do servidor</p>
        </div>
    </>)

    return (
        <div className="w-full h-full p-4 flex flex-col max-h-144">
            <h2 className="text-white text-center text-xl font-kanit font-bold mb-2">Lista de Dados</h2>

            {/* 2. Cabeçalho Fixo (Tabela separada) */}
            <table className="w-full table-fixed text-left font-kanit text-gray-200">
                <thead className="bg-gray-700 rounded-2xl">
                    <tr>
                        {/* Mantenha as larguras (w-1/4) para alinhar as colunas */}
                        <th className="py-2 px-4 w-1/6 text-center text-xs md:text-base">Título</th>
                        <th className="py-2 px-4 w-1/6 text-center text-xs md:text-base">Status</th>
                        <th className="py-2 px-4 w-1/6 text-center text-xs md:text-base">Descrição</th>
                        <th className="py-2 px-4 w-1/6 text-center text-xs md:text-base">Urgência</th>
                        <th className="py-2 px-4 w-1/6 text-center text-xs md:text-base">Dias Restantes</th>
                        <th className="py-2 px-4 w-1/6 text-end text-xs md:text-base">Opções</th>
                    </tr>
                </thead>
            </table>

            {/* 3. Corpo Rolável: Adicione min-h-0 para forçar o Flexbox a respeitar o limite de altura */}
            <div className=" overflow-y-auto no-scrollbar min-h-0">
                <table className="w-full table-fixed text-left text-gray-400">
                    {/* Repetição das Linhas para teste de Rolagem */}
                    <tbody>
                        {tarefas ? tarefas.map(tarefa => (
                            <tr key={tarefa.id} className="border-t border-gray-700 hover:bg-gray-700 whitespace-nowrap">
                                <td className="py-1 px-4 w-1/6 overflow-hidden text-ellipsis text-center text-xs md:text-base">{tarefa.titulo}</td>
                                <td className="py-1 px-4 w-1/6 overflow-hidden text-ellipsis text-center text-xs md:text-base">{tarefa.status}</td>
                                <td className="py-1 px-4 w-1/6 overflow-hidden text-ellipsis text-center text-xs md:text-base">{tarefa.descricao}</td>
                                <td className="py-1 px-4 w-1/6 overflow-hidden text-ellipsis text-center">
                                    <span className={`px-2 py-0.5 rounded-full text-xs md:text-sm font-semibold ${tarefa.urgencia === 'Alta' ? 'bg-red-500 text-white' :
                                        tarefa.urgencia === 'Media' ? 'bg-yellow-500 text-white' :
                                            'bg-green-500 text-white'
                                        }`}> {tarefa.urgencia}</span>
                                </td>
                                <td className="py-1 px-4 w-1/6 overflow-hidden text-ellipsis text-center text-xs md:text-base">{tarefa.diasRestantes}</td>
                                <td className="py-4 px-8 w-1/6 overflow-hidden text-ellipsis text-end text-xs md:text-base"><button className="cursor-pointer text-gray-200"
                                    onClick={() => { handleModal(tarefa.id, tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.urgencia, tarefa.dataPrazo) }}>
                                    <IoOptions size={20} className="cursor-pointer text-gray-200" />
                                </button></td>
                            </tr>
                        )) : (<>
                            <div className="font-kanit text-red-600 text-2xl font-bold text-center">
                                0 tarefas cadastradas no momento
                            </div>
                        </>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TailwindLista