import axios from "axios"

//Exposição de um constante de conexão e injeção do token no cabeçalho das requisições
const api = axios.create({
  baseURL: import.meta.env.VITE_API_LOCAL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api

