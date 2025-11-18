import { useSearchParams } from 'react-router-dom'
import { Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import { buscarInfoGerais } from '../../helpers/data'


const Grafico = ({refresh}) => {

    // const [dadosGerais, setDadosGerais] = useState(null)

    // const fetchDados = async() => {
    //     try {
    //         const response = await buscarInfoGerais()
    //         //console.log(response)
    //         setDadosGerais(response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=> {
    //     fetchDados()
    // }, [refresh])

    
    // if(!dadosGerais) return null
    
    // const dados = [
    //     { name: 'Alta urgencia', value: dadosGerais.tarefasAltaUrgencia || 0, fill: '#e40000'},
    //     { name: 'Media urgencia', value: dadosGerais.tarefasMediaUrgencia || 0, fill: '#fbff00ff'},
    //     { name: 'Baixa urgencia', value: dadosGerais.tarefasBaixaUrgencia || 0, fill: '#55d400ff'}
    // ];

        const dados = [
        { name: 'Alta urgencia', value: 200 || 0, fill: '#e40000'},
        { name: 'Media urgencia', value: 210 || 0, fill: '#fbff00ff'},
        { name: 'Baixa urgencia', value: 270 || 0, fill: '#55d400ff'}
    ]

    return (
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
    )

}

export default Grafico
