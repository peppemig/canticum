import {AiOutlineClockCircle} from "react-icons/ai"

const RowIntestationAlbum = () => {
    return (
        <>
        <div className="h-[50px] w-full flex rounded-md overflow-hidden text-white">

            <div className="text-sm w-[8%] h-full items-center justify-center flex text-white font-semibold">
                #
            </div>

            <div className="text-sm w-[40%] h-full items-center justify-start flex pl-2 gap-2 font-bold">
                TITOLO
            </div>

            <div className="text-sm w-[30%] h-full items-center justify-start flex pl-2 font-bold">
                ARTISTA
            </div>

            <div className="text-sm w-[8%] h-full items-center justify-start flex font-bold">
                ANNO
            </div>

            <div className="text-sm w-[14%] h-full items-center justify-center flex pl-2 font-semibold">
                BRANI
            </div>

        </div>
        <div className="h-[3px] w-full bg-white/30 rounded-md"></div>
        </>
        
    )
}

export default RowIntestationAlbum