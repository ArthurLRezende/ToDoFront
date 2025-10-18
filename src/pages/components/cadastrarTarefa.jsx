import { useState, useEffect } from 'react'
import './cadastrarTarefa.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { cadastrarTarefa } from '../../helpers/data';

const CadastroTarefa = ({ refresh }) => {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleCadastroTarefa = async (e) => {
        e.preventDefault()
        const Titulo = e.target.Titulo.value
        const Descricao = e.target.Descricao.value
        const Status = e.target.Status.value
        const Urgencia = e.target.Urgencia.value
        const Data = e.target.data.value

        const response = await cadastrarTarefa(Titulo, Descricao, Status, Urgencia, Data)

        if (response) {
            refresh()
            e.target.reset()
        } else {
            alert("Erro ao cadastrar uma nova tarefa")
        }
    }

    return (
        <form onSubmit={handleCadastroTarefa} className='formulario'>
            <input type="text" name="Titulo" className='TituloTarefa' placeholder='Insira o nome da tarefa' />
            <input type="text" name="Status" className='StatusTarefa' placeholder='Insira o status da tarefa' />
            <select name="Urgencia" className='UrgenciaTarefa'>
                <option value="" disabled selected>Nível de Urgencia</option>
                <option value="Alta" >Alta</option>
                <option value="Media" >Media</option>
                <option value="Baixa" >Baixa</option>
            </select>
            <input
                name='data'
                type="date"
                id="date"
                className='custom-date-input'
            // value={selectedDate}
            // onChange={handleChange}
            />
            <textarea name="Descricao" id="" className='DescricaoTarefa' placeholder='Insira a Descricao da tarefa'></textarea>
            <button className="cadastra-tarefa" type='submit'>Cadastrar a tarefa</button>
        </form>
    )
}

export default CadastroTarefa