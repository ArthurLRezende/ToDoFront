import { cadastrarTarefa } from '../helpers/data'

const Tailwindtarefas = ({refresh}) => {
       const handleCadastroTarefa = async (e) => {
            e.preventDefault()
            const Titulo = e.target.Titulo.value
            const Descricao = e.target.Descricao.value
            const Status = e.target.Status.value
            const Urgencia = e.target.Urgencia.value
            const Data = e.target.Data.value
    
            const response = await cadastrarTarefa(Titulo, Descricao, Status, Urgencia, Data)
    
            if (response) {
                refresh()
                e.target.reset()
            } else {
                alert("Erro ao cadastrar uma nova tarefa")
            }
        }

    return (<>
        <form className="w-full h-full grid grid-cols-3 grid-rows-2 items-end pb-8 md:pb-12" onSubmit={handleCadastroTarefa}>
            <div className="mx-4">
                <input type="text"name='Titulo' className="font-kanit text-md text-amber-50 border-b w-full focus:outline-none focus:ring-0 focus:border-b-amber-50" placeholder="Titulo" />
            </div>
            <div className=" mx-4">
                <input name='Data' type="date" id="date" className="w-full bg-gray-500 font-kanit text-amber-50 rounded-2xl p-2" />
            </div>
            <div className="mx-4">
                <select name="Urgencia" className="w-full bg-gray-500 font-kanit text-amber-50 rounded-2xl p-2">
                    <option value="" disabled selected>Nível de Urgencia</option>
                    <option value="Alta" >Alta</option>
                    <option value="Media" >Media</option>
                    <option value="Baixa" >Baixa</option>
                </select>
            </div>
            <div className="mx-4 flex items-end">
                <input type="text" name='Status' className="font-kanit text-md text-amber-50 items-end border-b w-full focus:outline-none focus:ring-0 focus:border-b-amber-50" placeholder="Status" />
            </div>
            <div className="mx-4 flex items-end">
                <textarea name="Descricao" id="" className='font-kanit text-md text-amber-50 border-b w-full overflow-y-auto no-scrollbar focus:outline-none focus:ring-0 focus:border-b-amber-50' placeholder='Insira a Descricao da tarefa'></textarea>
            </div>
            <div className="mx-4 flex items-end">
                <button className=" bg-green-600 font-kanit text-white text-xs md:text-xl w-full rounded-2xl p-1 md:p-2
                             shadow-lg                 
                             active:translate-y-0.5    
                             active:shadow-md          
                             transition-all duration-150
                             hover:shadow-xl           
                            hover:bg-green-700"
                        type='submit'>Cadastrar</button>
            </div>

        </form>
    </>)
}

export default Tailwindtarefas