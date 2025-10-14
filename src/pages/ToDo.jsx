import { useState, useEffect } from 'react'
import './ToDo.css'

const ToDo = () => {

    return (
        <>
            <div className="ToDo">
                <div className="cabecalho">
                    <h1 className="titulo">Organizador de tarefas</h1>
                    <button className="logout">LogOut</button>
                </div>
                <div className="superior">
                    <div className="superior-cadastro">
                        parte de cadastro
                    </div>
                    <div className="superior-insight">
                        parte de insight do gpt
                    </div>
                </div>
                <div className="inferior">

                </div>
            </div>
        </>
    )

}

export default ToDo