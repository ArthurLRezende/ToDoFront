
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import image from '../assets/image.png'
import './login.css'
import ToDo from './ToDo'
import { logar } from '../helpers/data';

const Login = () => {
    
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault() // Evita recarregar a página

    const email = e.target.Email.value
    const senha = e.target.Senha.value

    const sucesso = await logar(email, senha)

    if (sucesso) {
      navigate("/ToDo") // Redireciona para a página protegida
    } else {
      alert("Email ou senha inválidos!")
    }
  }

    return(
        <>
            <div className="login">
                <div className="left-side">
                </div>
                <div className="right-side">
                    <h1>Faça seu Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="Email" className='Email' placeholder='Email' />
                        <input type="password" name="Senha" className='Senha' placeholder='Senha' />
                        <button className='Botao' type='submit'>LogIn</button>
                        <div className="footer-form">
                            <a className='CriarConta' onClick={() =>
                                 navigate('/cadastro')}>Crie sua conta</a>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login