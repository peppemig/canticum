import {AiOutlineClockCircle} from "react-icons/ai"

const RowIntestation = () => {
    return (
        <>
        <div className="h-[50px] w-full flex rounded-md overflow-hidden text-white">

            <div className="w-[8%] h-full items-center justify-center flex text-white font-semibold">
                #
            </div>

            <div className="w-[40%] h-full items-center justify-start flex pl-2 gap-2">
                TITOLO
            </div>

            <div className="w-[30%] h-full items-center justify-start flex pl-2 font-bold">
                ALBUM
            </div>

            <div className="w-[8%] h-full items-center justify-center flex">
                
            </div>

            <div className="w-[14%] h-full items-center justify-start flex pl-2 font-semibold">
                <AiOutlineClockCircle size={24} color="white"/>
            </div>

        </div>
        <div className="h-[3px] w-full bg-white/30 rounded-md"></div>
        </>
        
    )
}

export default RowIntestation