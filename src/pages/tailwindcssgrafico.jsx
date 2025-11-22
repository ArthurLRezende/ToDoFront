import { useState, useEffect } from "react"
import { buscarInfoGerais } from "../helpers/data"
import { Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts'

//Componente de grafico dentro da home
const TailwindGrafico = ({ refresh }) => {

    //Const de controle
    const [dadosGerais, setDadosGerais] = useState(null)

    //Func que chama outra Func para retornar as informações gerais e disponibilizá-las para serem alocadas em seus devidos elementos html
    const fetchDados = async () => {
        try {
            const response = await buscarInfoGerais()
            // console.log(response)
            setDadosGerais(response)
        } catch (error) {
            console.log(error)
        }
    }


    //Func para sempre que chegar o refresh ser atualizada
    useEffect(() => {
        fetchDados()
    }, [refresh])

    //Caso dadosGerais seja nulo exibirá esse componente
    if (!dadosGerais) return (<>
    <div className="w-full h-full flex items-center justify-center"> 
        <p className="font-kanit uppercase text-2xl justify-center text-red-600">Sem dados do servidor</p>
    </div>
    </>)

    const dados = [
        { name: 'Alta urgencia', value: dadosGerais.tarefasAltaUrgencia || 0, fill: '#e40000' },
        { name: 'Media urgencia', value: dadosGerais.tarefasMediaUrgencia || 0, fill: '#fbff00ff' },
        { name: 'Baixa urgencia', value: dadosGerais.tarefasBaixaUrgencia || 0, fill: '#55d400ff' }
    ]

    return (<>

        <div className="w-full h-full grid grid-cols-3 grid-rows-4">
            {dadosGerais ? (<>  <div className="md:col-span-2 md:row-span-4 col-span-3 row-span-3">
                {/* <Grafico /> */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart height={50} width={50}>
                        <Pie
                            activeShape={{
                                fill: '#04F8C7',
                                stroke: '#2df804ff',
                            }}
                            data={dados}
                        />
                        <Tooltip defaultIndex={2} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
                <div className="md:col-span-1 md:row-span-4 flex md:flex-col col-span-3 row-span-1">
                    <>
                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <h2 className="text-gray-200 font-kanit uppercase text-xs md:text-xl">Total de tarefas</h2>
                            <h1 className="text-orange-600 font-kanit md:text-5xl text-3xl">{dadosGerais.totalTarefas}</h1>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <h2 className="text-gray-200 font-kanit uppercase text-xs md:text-xl">Tarefas atrasadas</h2>
                            <h1 className="text-red-600 font-kanit md:text-5xl text-3xl">{dadosGerais.tarefasAtrasadas}</h1>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <h2 className="text-gray-200 font-kanit uppercase text-xs md:text-xl">Tarefas no prazo</h2>
                            <h1 className="text-yellow-500 font-kanit md:text-5xl text-3xl">{dadosGerais.tarefasNoPrazo}</h1>
                        </div>
                        <div className="w-full h-full flex flex-col items-center justify-center text-center">
                            <h2 className="text-gray-200 font-kanit uppercase text-xs md:text-xl">Tarefas concluídas</h2>
                            <h1 className="text-green-600 md:text-5xl text-3xl">{dadosGerais.tarefasConcluidas}</h1>
                        </div>
                    </>

                </div>
            </>) : (<>
                <p className="font-kanit uppercase text-2xl justify-center text-red-600">Sem dados no momento...</p>
            </>)}


        </div>
    </>)
}

export default TailwindGrafico