import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import ToDo from './pages/ToDo'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/tailwindcsshome'
import LoginTailwind from './pages/tailwindcsslogin'
import CadastroTailwind from './pages/tailwindcadastro'

function App() {


  return (
    <>
    {/* <CadastroTailwind /> */}
      {/* <LoginTailwind /> */}
      {/* <div className="container">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login/>} />

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route
              path="/todo"
              element={
                <ProtectedRoute>
                  <ToDo />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </div> */}
      <BrowserRouter>
          <Routes>

            <Route path="/" element={<LoginTailwind/>} />

            <Route path="/login" element={<LoginTailwind />} />
            <Route path="/cadastro" element={<CadastroTailwind />} />

            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
