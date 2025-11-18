import image from '../assets/bgCadastro.png'
import { SlArrowLeft } from "react-icons/sl"
import { cadastrarUsuario } from '../helpers/data'
import { useNavigate } from 'react-router-dom'

const CadastroTailwind = () => {
    const navigate = useNavigate()

    const handleCadastro = (e) => {
        e.preventDefault()
        const Nome = e.target.Nome.value
        const Email = e.target.Email.value
        const Senha = e.target.Senha.value

        const resultado = cadastrarUsuario(Nome, Email, Senha)

        if (resultado) {
            navigate('/login')
        } else {
            alert("Erro ao cadastrar")
        }

    }
    return (<>
        <div className="min-h-screen w-full overflow-x-hidden font-kanit bg-gray-950">
            <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
                <div className=" flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center w-full max-w-lg ">
                        <form className="flex flex-col w-full max-w-lg bg-transparent gap-6 box-border" onSubmit={handleCadastro}>

                            <h1 className="text-4xl md:text-6xl leading-tight bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-center">
                                Faça seu Cadastro
                            </h1>

                            <input
                                className="w-full p-3 border-b text-gray-200 border-blue-500 outline-none text-xl md:text-xl bg-transparent box-border"
                                type="text"
                                name='Nome'
                                placeholder="Nome"
                            />

                            <input
                                className="w-full p-3 border-b text-gray-200 border-blue-500 outline-none text-xl md:text-xl bg-transparent box-border"
                                type="text"
                                name='Email'
                                placeholder="Email"
                            />

                            <input
                                type="password"
                                className="w-full p-3 border-b text-gray-200 border-blue-500 outline-none text-xl md:text-xl bg-transparent box-border"
                                name='Senha'
                                placeholder="Password"
                            />

                            <button
                                className="w-full py-2 mt-8 text-2xl md:py-3 md:text-2xl bg-gradient-to-r from-green-500 to-blue-500 text-amber-50 rounded-md cursor-pointer box-border"
                                type="submit"
                            >
                                Cadastrar
                            </button>
                        </form>
                        <a href="#" className="mt-4 text-md absolute top-0 left-2 font-bold text-gray-200 cursor-pointer" onClick={() => {navigate('/login')}}>
                            <SlArrowLeft color='#ddd' />
                        </a>
                    </div>
                </div>
                <div className="hidden md:block overflow-hidden">
                    <img
                        src={image}
                        alt="Descrição da imagem"
                        className="w-full h-full object-cover max-w-full max-h-screen"
                    />
                </div>
            </div>
        </div>
    </>)
}


export default CadastroTailwind