import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import ToDo from './pages/ToDo'
import ProtectedRoute from './routes/ProtectedRoute'
import './index.css'

function App() {


  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}

export default App
