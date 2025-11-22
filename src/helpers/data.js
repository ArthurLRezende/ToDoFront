import api from "./api";


//Func para chamar o endpoint do serviodor de autenticação
export const logar = async (email, senha) => {

    try {
        const response = await api.post("/auth/login", { Email: email, Senha: senha })
        // console.log(response.data.token) 
        localStorage.setItem("token", response.data.token)
        return true

    } catch (error) {
        // console.log(error)
        return false
    }

}

//Func para chamar a remover o token
export const LogOut = () => {
    localStorage.removeItem("token")
}

//Func para chamar o endpoint do servidor para cadastrar uma nova tarefa
//passando a nova estrutura que será atualizada no servidor
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
        // console.log(response)
        if (response.status == 201) {
            // console.log('true')
            return true
        } else {
            // console.log('false')
            return false
        }

    } catch (error) {
        console.log('false')
        // console.log(error)
        return false
    }
}

//Func para chamar o endpoint do servidor de atualização de tarefa
//passando a nova estrutura que será atualizada no backend
export const atualizarTarefa = async (tarefaAtualizada) => {
    try {
        // console.log(tarefaAtualizada)
        const tarefa = {
            id: tarefaAtualizada.id,
            titulo: tarefaAtualizada.titulo,
            descricao: tarefaAtualizada.descricao,
            dataDeEntrega: tarefaAtualizada.novaData,
            urgencia: tarefaAtualizada.urgencia,
            status: tarefaAtualizada.status
        }
        console.log(tarefa)
        const response = await api.put("/tarefas", tarefa)
        console.log(response)
        return true
    } catch (error) {
         console.log(error)
        return false
    }
}

//Func para chamar o endpoint do servidor para buscar a tarefa
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

//Func para chamar o endpoint do servidor para deletar a tarefa
//passando o id como parametro para o servidor
export const deletarTarefa = async (id) => {

    try {
        const response = await api.delete(`/tarefas/${id}`)
        // console.log(response)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

//Func para chamar o endpoint do servidor para concluir a tarefa
//passando o id como parametro para o servidor
export const concluirTarefa = async (id) => {

    try {
        const response = await api.put(`/tarefas/concluir/${id}`)
        // console.log(response)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

//Func para chamar o endpoint de cadastro de usuario
//não precisa passar o token de autenticação para o endpoint dessa função  
export const cadastrarUsuario = async (nome, email, senha) => {

    try {

        const resultado = await api.post("/usuario", { Nome: nome, Email: email, Senha: senha })
        // console.log(resultado)
        return true

    } catch (error) {
        // console.log(error)
        return error.response.status
    }
}

//Func para chamar o endpoint do servidor que irá fazer uma consulta a API da OpenAI para gerar um insight direcionado sobre as tarefas do usuario
export const buscarinsight = async () => {

    try {
        const response = await api.get("/gpt/teste")
        if (!response) {
            console.log(`Erro na requisicao:${response}`)
            return null
        }
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }

}

//Func para chamar o endpoint do servidor que é responsável por retornar as informações gerais das tarefas dos usuarios
export const buscarInfoGerais = async () => {
    try {
        const response = await api.get("/tarefas/overview")
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}