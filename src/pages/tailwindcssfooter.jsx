import { FaRegCopyright } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const TailwindFooter = () => {

  return (
    <>
      <div className="w-full h-10/12 grid-cols-2 flex items-center justify-center py-8 gap-20 border-b border-gray-300 ">
        <div className="font-kanit">
          <h1 className="text-gray-200 text-xl font-bold mb-2 text-center">
            Sobre nós
          </h1>
          <h4 className="text-gray-100 text-sm">
            Informações gerais
          </h4>
          <h4 className="text-gray-100 text-sm">
            Blog
          </h4>
          <h4 className="text-gray-100 text-sm">
            Visão e valores
          </h4>
          <h4 className="text-gray-100 text-sm">
            Inovação
          </h4>
        </div>
        <div className="font-kanit">
          <h1 className="text-gray-200 text-xl font-bold mb-2 text-center">
            Suporte
          </h1>
          <h4 className="text-gray-100 text-sm">
            FAQ
          </h4>
          <h4 className="text-gray-100 text-sm">
            Atendimento Online
          </h4>
          <h4 className="text-gray-100 text-sm">
            Atendimento Prioritário
          </h4>
          <h4 className="text-gray-100 text-sm underline">
            <a href="https://www.linkedin.com/in/arthur-lima-rezende-219006221/">Contato</a>
          </h4>
        </div>
      </div>
      <div className="w-full h-2/12 flex justify-center items-center font-kanit text-gray-200 text-sm gap-1">
        <FaRegCopyright />
        <h3>2025 Copyright -</h3>
        <TypeAnimation
          sequence={[
            '  Arthur Lima Rezende', 
            1000,
            ' Desenvolvedor FullStack',
            2000, 
            () => {
             
            }
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </>
  )
}

export default TailwindFooter
