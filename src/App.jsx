import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/tailwindcsshome'
import LoginTailwind from './pages/tailwindcsslogin'
import CadastroTailwind from './pages/tailwindcadastro'

function App() {

  return (
    <>
      {/*Criação e Proteção de Rotas*/}
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
