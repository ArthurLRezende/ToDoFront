
import {useState, useEffect} from 'react'
import image from '../assets/image.png'
import './login.css'
import ToDo from './ToDo'

const Login = () => {

    const callapi = async (Email, Senha) => {
    var resultado = await axios.post("https://localhost:17154/auth/login",{
    Email: 'jakrh@hotmail.com',
    Senha: '1934'
    })

    console.log(resultado)
  }

    return(
        <>
            <div className="login">
                <div className="left-side">
                </div>
                <div className="right-side">
                    <h1>Faça seu Login</h1>
                    <form action="">
                        <input type="text" className='Email' placeholder='Email' />
                        <input type="password" className='Senha' placeholder='Senha' />
                        <button className='Botao' onClick={() => {<ToDo/>}}>LogIn</button>
                        <div className="footer-form">
                            <button className='CriarConta' onClick={() => {}}>Crie sua conta</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login