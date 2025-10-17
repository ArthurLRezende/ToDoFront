import api from "./api";
import axios from "axios";

export const logar = async (email, senha) => {

    try {

        const response = await api.post("/auth/login", { Email: email, Senha: senha })

        console.log(response.data.token)

        localStorage.setItem("token", response.data.token)
        return true

    } catch (error) {
        console.log(error)
        return false
    }

}


export const pegartarefas = async () => {
    try {
        const response = await api.get("/tarefas")
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const cadastrarUsuario = async (nome, email, senha) => {

    try {

        const resultado = await api.post("/usuario", { Nome: nome, Email: email, Senha: senha })
        console.log(resultado)

    } catch (error) {
        console.log(error)
    }
}


export const buscarinsight = async () => {
    
    try {
        const response = await api.get("/gpt/teste")
        if(!response){
            console.log(`Erro na requisicao:${response}`)
            return null
        }
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }

}