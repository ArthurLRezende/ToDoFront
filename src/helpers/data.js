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


export const LogOut = () => {
    localStorage.removeItem("token")
}

export const cadastrarTarefa = async (Titulo, Descricao, Status, Urgencia, Data) => {
    try {
        console.log(Titulo, Descricao, Status, Urgencia, Data)
        const response = await api.post("/tarefas",
            {
                titulo: Titulo,
                descricao: Descricao,
                Urgencia: Urgencia,
                status: Status,
                dataDeEntrega: `${Data}`
            })
        console.log(response)
        if (response.status == 201) {
            console.log('true')
            return true
        } else {
            console.log('false')
            return false
        }

    } catch (error) {
        console.log('false')
        console.log(error)
        return false
    }
}

export const atualizarTarefa = async (tarefaAtualizada) => {
    try {
        const response = await api.put("/tarefas", {
            id: tarefaAtualizada.id,
            titulo: tarefaAtualizada.Titulo,
            descricao: tarefaAtualizada.Descricao,
            dataDeEntrega: tarefaAtualizada.novaData,
            urgencia: tarefaAtualizada.urgencia,
            status: tarefaAtualizada.status
        })

        console.log(response)
        return true
    } catch (error) {
        console.log(error)
        console.log(tarefaAtualizada)
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

export const deletarTarefa = async (id) => {

    try {
        const response = await api.delete(`/tarefas/${id}`)
        console.log(response)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

export const concluirTarefa = async (id) => {

    try {
        const response = await api.put(`/tarefas/concluir/${id}`)
        console.log(response)
        return true
    } catch (error) {
        console.log(error)
        return false
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
        if (!response) {
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

export const buscarInfoGerais = async () => {
    try {
        const response = await api.get("/tarefas/overview")
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}