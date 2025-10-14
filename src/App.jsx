import { useState } from 'react'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import ToDo from './pages/ToDo'
import './index.css'

function App() {


  return (
    <>
    <div className="container">
        <Login />
        {/* <Cadastro /> */}
        {/* <ToDo /> */}

    </div>
{/*     
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={callapi}>
        
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
