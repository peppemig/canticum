import {AiOutlineHeart, AiFillPlayCircle} from "react-icons/ai"
import {BiSkipPrevious, BiSkipNext, BiShuffle} from "react-icons/bi"
import {BsRepeat, BsFillVolumeDownFill} from "react-icons/bs"
import {TbMicrophone2} from "react-icons/tb"
import {HiViewList} from "react-icons/hi"


const Player = () => {
    return (
        <div className='bg-gray-900 border-t-[1px] w-screen h-[90px] text-white flex items-center justify-center md:justify-between p-3'>
          
        <div className="hidden md:flex items-center gap-3 w-[215px]">
          
          <div className="w-full flex items-center">
            <div className="flex-col w-full">
              <div className="font-bold truncate">ANNA</div>
              <div className="text-sm text-gray-300">LIBERATO</div>
            </div>

            <div className="max-w-[240px]">
              <AiOutlineHeart size={25}/>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-1 justify-center items-center">

          <div className="flex items-center gap-2">
            <BiShuffle className="text-gray-400 hover:text-white transition" size={20} />
            <BiSkipPrevious className="text-gray-400 hover:text-white transition" size={35}/>
            <AiFillPlayCircle className="hover:scale-125 transition" size={40}/>
            <BiSkipNext className="text-gray-400 hover:text-white transition" size={35}/>
            <BsRepeat className="text-gray-400 hover:text-white transition" size={20}/>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs">
              3:28
            </div>
            <div className="bg-gray-200 h-[5px] w-[200px] md:w-[300px] lg:w-[500px] rounded-md">
            </div>
            <div className="text-xs">
              3:28
            </div>
          </div>

        </div>

        <div className="hidden md:flex items-center gap-2">
          <TbMicrophone2 size={20}/>
          <HiViewList size={20}/>
          <div className="flex items-center gap-1">
            <BsFillVolumeDownFill size={25}/>
            <div className="bg-gray-200 h-[5px] w-[60px] rounded-md">
            </div>
          </div>
        </div>

      </div>
    )
}

export default Player