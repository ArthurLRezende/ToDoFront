import { useState, useEffect } from "react";
import './insightgpt.css'
const Insight = () => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState(null)


    const handleInsight = () => {
        setMessage('Tulipinha é bom demais')
        setShowMessage(true)
    }

    return (
        
        <div className="insight">
            {showMessage ? (<>
               <div className="insight-box">
                    {message}
               </div>
            </>) : (<>
                <button className="insightBotao" onClick={handleInsight}>Gerar insight do chatgpt</button>
            </>)}

        </div>
        

    
    )

}

export default Insight