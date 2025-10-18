import { useState, useEffect } from "react";
import './insightgpt.css'
import { buscarinsight } from "../../helpers/data";
const Insight = () => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState(null)


    const handleInsight = async() => {
        const response = await buscarinsight()
        setMessage(response)
        setShowMessage(true)
    }

    return (

        <div className="insight">
            {showMessage ? (<>
                <div className="insight-box">
                    < p className="insight-text">
                        {message}
                    </p>
                </div>
            </>) : (<>
                <button className="insightBotao" onClick={handleInsight}>Gerar insight do chatgpt</button>
            </>)}

        </div>



    )

}

export default Insight