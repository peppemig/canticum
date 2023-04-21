import { MdNavigateNext } from "react-icons/md"
import { ImMusic } from "react-icons/im"


const StartPage = ({next}) => {
  return (
    <div className="scaleIn bg-gray-700 h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">

        <div className="flex gap-2 items-center justify-center">
        <div><ImMusic size={50} color="white"/></div>
        <div className="text-white">
            <div className="font-bold text-xl">Canticum</div>
            <div className="font-semibold">Music for you!</div>
        </div>
        </div>

        <div className="flex flex-col items-center justify-center">
        <div className="text-gray-900 font-semibold text-2xl">Pubblica il tuo album</div>
        <div className="text-gray-900 font-bold text-4xl">su Canticum!</div>
        </div>

        <div className="flex flex-col">
        <div className="text-white font-semibold text-lg">Sei pronto per far ascoltare la tua musica</div>
        <div className="text-white font-bold text-3xl">a milioni di persone?</div>
        </div>

        <div onClick={next} className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pl-5 pr-2 py-2 rounded-lg font-semibold flex items-center">
        <div className="font-semibold">Continua</div>
        <MdNavigateNext size={30}/>
        </div>

    </div>
  )
}

export default StartPage