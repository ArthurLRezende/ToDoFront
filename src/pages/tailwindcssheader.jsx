import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LogOut} from '../helpers/data';
import image from '../assets/logo.png'

//Componente de cabeçalho dentro da home
const Tailwindheader = () => {
    const navigate = useNavigate();

    //Func para chamar a func que remove o token e redireciona para a tela de login
    const handleLogOut = () => {
        LogOut()
        navigate('/login')
    }

    return (
        <>
            <div className=" w-full flex items-center justify-center">

                <button className="absolute right-4 p-2 hover:bg-gray-600 rounded-full transition active:bg-gray-600" onClick={handleLogOut}>
                    <MdOutlineLogout size={28} color="#ddd" />
                </button>

                <img
                    src={image}
                    alt="logo"
                    className="h-14 object-contain"
                />
            </div>
        </>
    )
}

export default Tailwindheader