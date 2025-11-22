import { useState } from "react"
import { buscarinsight } from "../helpers/data"

//Componente de insight dentro da home
const TailwindGPT = () => {

    //Constantes de controle para organizar a exibição
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState(null)

    //Metodo para controlar a função e o display das telas
    const handleInsight = async () => {
        const response = await buscarinsight()
        setMessage(response)
        setShowMessage(true)
    }

    return (<>
        <div className="h-full w-full flex items-center p-4 border-b border-amber-50 max-h-72">
            {showMessage ? (
                <div className="w-full h-full overflow-y-auto no-scrollbar min-h-0  wrap-break-word">
                    <p className="text-gray-100 font-kanit text-justify">
                        {message}
                    </p>
                </div>
            ) : (
                <button onClick={handleInsight} className="w-full flex items-center justify-center rounded-2xl p-2 mx-4 bg-gray-500 font-kanit text-amber-50 active:translate-y-0.5 hover:bg-gray-600">
                    Gerar insight do GPT
                </button>
            )}
        </div>


    </>)
}

export default TailwindGPT