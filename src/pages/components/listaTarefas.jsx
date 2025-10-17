import { useState, useEffect } from 'react'
import './listaTarefas.css'
import { pegartarefas } from '../../helpers/data'

const ListaTarefas = () => {

    const [tarefas, setTarefas] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchDados = async () => {
        try {
            const response = await pegartarefas()
            if (response) setTarefas(response)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDados()
    }, [])

    const handleClick = (id, titulo, descricao) => {
        console.log(id)
    }

    return (<>
        <div className="tarefas">
            {loading ? (
                <p>Carregando tarefas...</p>
            ) : tarefas.length > 0 ? (
                <div className="tata">
                    {tarefas.map(tarefa => (
                        <p
                            key={tarefa.id}
                            onClick={() => handleClick(tarefa.id)}
                            className="linhaTarefas"
                        >
                            {`Titulo: ${tarefa.titulo} | Descricao: ${tarefa.descricao}`}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="semtarefa">Sem tarefas até o momento</p>
            )}
        </div>
    </>)

}

export default ListaTarefas