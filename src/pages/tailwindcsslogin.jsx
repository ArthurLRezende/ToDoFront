import image from '../assets/bg.png'
import { useNavigate } from "react-router-dom"
import { logar } from '../helpers/data'

const LoginTailwind = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault() // Evita recarregar a página

        const email = e.target.Email.value
        const senha = e.target.Senha.value

        const sucesso = await logar(email, senha)

        if (sucesso) {
            navigate("/Home") // Redireciona para a página protegida
        } else {
            alert("Email ou senha inválidos!")
        }
    }

    return (
        <>
            <div className="min-h-screen w-full overflow-x-hidden font-kanit bg-gray-950">
                <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">

                    <div className="hidden md:block overflow-hidden">
                        <img
                            src={image}
                            alt="Descrição da imagem"
                            className="w-full h-full object-cover max-w-full max-h-screen"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center px-4 py-8">
                        <div className="flex flex-col items-center w-full max-w-lg">
                            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg bg-transparent gap-6 box-border">

                                <h1 className="text-4xl md:text-6xl leading-tight bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent text-center">
                                    Faça seu LogIn
                                </h1>

                                <input
                                    className="w-full p-2 border-b text-gray-200 border-blue-500 outline-none text-xl md:text-xl bg-transparent box-border"
                                    type="text"
                                    name='Email'
                                    placeholder="email"
                                />

                                <input
                                    type="password"
                                    className="w-full p-2 border-b text-gray-200 border-blue-500 outline-none text-xl md:text-xl bg-transparent box-border"
                                    name='Senha'
                                    placeholder="password"
                                />

                                <button
                                    className="w-full py-1 mt-6 md:py-2 text-xl md:text-3xl bg-gradient-to-r from-green-500 to-blue-500 text-amber-50 rounded-md cursor-pointer box-border"
                                    type="submit"
                                >
                                    Logar
                                </button>
                            </form>
                            <a href="#" className="mt-10 text-md text-gray-50 cursor-pointer underline" onClick={() =>
                                 navigate('/cadastro')}>
                                Crie sua conta
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginTailwind
