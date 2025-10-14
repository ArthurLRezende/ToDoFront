import { useState, useEffect } from 'react'
import './cadastro.css'

const Cadastro = () => {

    return (<>
        <div className="Cadastro">
            <div className="side-left">
                <h1>Crie sua Conta</h1>
                <form action="">
                    <input type="text" className='NomeCadastro' placeholder='Insira seu nome' />
                    <input type="text" className='EmailCadastro' placeholder='Insira seu Email' />
                    <input type="password" className='SenhaCadastro' placeholder='Insira sua Senha' />

                    <button className='BotaoCadastro' onClick={() => { }}>Cadastrar</button>
                </form>
            </div>

            <div className="side-right">
            </div>
        </div>
    </>
    )
}

export default Cadastro