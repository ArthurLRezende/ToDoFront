import { useState, useEffect } from "react"
import { buscarInfoGerais, pegartarefas } from '../helpers/data';
import TailwindGPT from "./tailwindcssgpt"
import TailwindGrafico from "./tailwindcssgrafico"
import Tailwindheader from "./tailwindcssheader"
import TailwindLista from "./tailwindcsslista"
import Tailwindtarefas from "./tailwindcsstarefas"
import ModalTailwind from "./tailwindcssModal"
import TailwindFooter from "./tailwindcssfooter"

const Home = () => {

    const [tarefaSelecionada, setTarefaSelecionada] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleModal = (id, Titulo, Descricao, Status, Urgencia, DataPrazo) => {

        const tarefa = {
            id,
            Titulo,
            Descricao,
            Status,
            Urgencia,
            DataPrazo
        }
        setTarefaSelecionada(tarefa)
        setShowModal(true)
    }

    const [refreshLista, setRefreshLista] = useState(0)
    const [dadosGerais, setDadosGerais] = useState(null)

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

    return (<>
        <div className="fixed top-0 w-full bg-gray-500 z-50 h-16 flex items-center px-4 shadow-lg">
            <Tailwindheader />
        </div>
        <div className="min-h-screen w-full bg-gray-950 md:pt-16">
            <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-3 grid-rows-12">
                <div className="row-span-2 bg-gray-800 md:row-span-4 md:col-span-2 my-1 mx-1 rounded-lg">
                    <Tailwindtarefas refresh={handleRefresh}/>
                </div>
                <div className="row-span-2 flex bg-gray-800 md:row-span-4 md:col-span-1 my-1 mx-1 min-h-64 rounded-lg">
                    <TailwindGPT />
                </div>
                <div className="row-span-4 flex bg-gray-800 md:row-span-8 md:col-span-2 my-1 mx-1 rounded-lg">
                    <TailwindLista handleModal={handleModal} refresh={handleRefresh} />
                </div>
                <div className="row-span-4 bg-gray-800 md:row-span-8 md:col-span-1 my-1 mx-1 rounded-lg">
                    <TailwindGrafico refresh={handleRefresh}/>
                </div>

            </div>
            <div className="w-full h-72 bg-gray-950">
                <TailwindFooter />
            </div>
        </div>
        <ModalTailwind show={showModal} tarefa={tarefaSelecionada} onClose={() => setShowModal(false)} refresh={handleRefresh}/>
    </>)
}

export default Home
