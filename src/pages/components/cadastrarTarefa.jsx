import { useState, useEffect } from 'react'
import './cadastrarTarefa.css'

const CadastroTarefa = () => {


    return (
        <form action="" className='formulario'>
            <input type="text" className='TituloTarefa' placeholder='Insira o nome da tarefa' />
            <textarea name="" id="" className='DescricaoTarefa' placeholder='Insira a Descricao da tarefa'></textarea>
            <input type="text" className='StatusTarefa' placeholder='Insira o status da tarefa'/>
            <a>oiusad</a>

            <button className="cadastra-tarefa">Cadastrar a tarefa</button>
        </form>
    )
}

export default CadastroTarefa