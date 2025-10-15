import { useState, useEffect} from 'react'
import './cadastro.css'
import { cadastrarUsuario } from '../helpers/data'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {

    const navigate = useNavigate()

    const handleCadastro = (e) => {
        e.preventDefault()
        const Nome = e.target.Nome.value
        const Email = e.target.Email.value
        const Senha = e.target.Senha.value

        const resultado = cadastrarUsuario(Nome, Email, Senha)
        
        if(resultado){
            navigate('/login')
        }else{
            alert("Erro ao cadastrar")
        }

    }

    return (<>
        <div className="Cadastro">
            <div className="side-left">
                <h1>Crie sua Conta</h1>
                <form onSubmit={handleCadastro}>
                    <input type="text" name="Nome" className='NomeCadastro' placeholder='Insira seu nome' />
                    <input type="text" name="Email" className='EmailCadastro' placeholder='Insira seu Email' />
                    <input type="password" name="Senha" className='SenhaCadastro' placeholder='Insira sua Senha' />

                    <button className='BotaoCadastro' type='submit'>Cadastrar</button>
                </form>
            </div>

            <div className="side-right">
            </div>
        </div>
    </>
    )
}

export default Cadastro