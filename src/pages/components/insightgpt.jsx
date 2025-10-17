import { useState, useEffect } from "react";
import './insightgpt.css'
import { buscarinsight } from "../../helpers/data";
const Insight = () => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState(null)


    const handleInsight = () => {
        //const response = buscarinsight()
        const response = 'Teste GPT funcionando! [ASSISTANT]: Claro! Como o usuário atualmente não possui tarefas cadastradas,'+
        'aqui estão algumas dicas para otimizar a gestão de tarefas:\n\n1. **Priorize Suas Tarefas:** Comece listando tarefas essenciais ou urgentes para garantir '+
        'que o que é mais importante seja tratado primeiro.\n\n2. **Defina Metas Claras:** Estabeleça objetivos específicos e mensuráveis para cada tarefa,'+
        'garantindo clareza e propósito.\n\n3. **Utilize Categorias:** Classifique suas tarefas por categorias, como \"Trabalho\", \"Pessoal\", ou \"Urgente\"'+
        ' para facilitar a organização e o foco.\n\n4. **Estabeleça Prazos:** Atribua prazos realistas para a conclusão de cada tarefa para melhorar o gerenciamento do tempo.'+
        '\n\n5. **Revise Regularmente:** Faça revisões semanais para acompanhar o progresso e ajustar prioridades conforme necessário.\n\n6.'+
        ' **Delegue Quando Possível:** Se uma tarefa pode ser repassada a outra pessoa, delegue para liberar tempo e energia.'+
        '\n\nSeguindo essas dicas, você pode começar a criar uma lista de tarefas eficaz e ajustá-la conforme aprende o que funciona melhor para suas necessidades.'+ 'Teste GPT funcionando! [ASSISTANT]: Claro! Como o usuário atualmente não possui tarefas cadastradas,'+
        'aqui estão algumas dicas para otimizar a gestão de tarefas:\n\n1. **Priorize Suas Tsaddfgfghhgfjfghjfdgagadfgdaarefas:** Comece listando tarefas essenciais ou urgentes para garantir '+
        'que o que é mais importante seja tratado primeiro.\n\n2. **Defina Metas Claras:** Estabeleça objetivos específicos e mensuráveis para cada tarefa,'+
        'garantindo clareza e propósito.\n\n3. **Utilize Categorias:** Classifique suas tarefas por categorias, como \"Trabalho\", \"Pessoal\", ou \"Urgente\"'+
        ' para facilitar a organização e o foco.\n\n4. **Estabeleça Prazos:** Atribua prazos realistas para a conclusão de cada tarefa para melhorar o gerenciamento do tempo.'+
        '\n\n5. **Revise Regularmente:** Faça revisões semanais para acompanhar o progresso e ajustar prioridades conforme necessário.\n\n6.'+
        ' **Delegue Quando Possível:** Se uma tarefa pode ser repassada a outra pessoa, delegue para liberar tempo e energia.'+
        '\n\nSeguindo essas dicas, você pode começar a criar uma lista de tarefas eficaz e ajustá-la conforme aprende o que funciona melhor para suas necessidades.'
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