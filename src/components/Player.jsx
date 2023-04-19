import {AiOutlineHeart, AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai"
import {BiSkipPrevious, BiSkipNext, BiShuffle} from "react-icons/bi"
import {BsRepeat, BsFillVolumeDownFill} from "react-icons/bs"
import {TbMicrophone2} from "react-icons/tb"
import {HiViewList} from "react-icons/hi"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"


const Player = () => {
    //const id = "643d0f3f9c975b0b00022a74"
    const [isPlaying, setIsPlaying] = useState(false)
    const [songToPlay, setSongToPlay] = useState({})
    const audioElem = useRef()

    const currentSong = useSelector((state) => state.currentSong.currentSong)
    const isMobilePlayerOpen = useSelector((state) => state.mobilePlayerOpen.isOpen)

    useEffect(() => {
      if (currentSong !== '') {
        axios.get(`http://localhost:5000/api/song/${currentSong}`).then(response => {
          setSongToPlay(response.data)
          audioElem.current.pause()
          audioElem.current.load()
          setIsPlaying(false)
        })
      }
    }, [currentSong])

    useEffect(() => {
      PlayPause()
    }, [songToPlay])

    const PlayPause = () => {
      if(isPlaying){
        audioElem.current.pause()
        setIsPlaying(false)
      } else {
        audioElem.current.play()
        setIsPlaying(true)
      }
    }

    const classes = "backdrop-blur fixed bottom-20 md:bottom-0 bg-gray-300/30 md:bg-gray-900 border-0 md:border-t-[1px] w-screen h-[65px] md:h-[10vh] text-white flex items-center justify-between md:p-3 pr-10"

    return (

        <div className={isMobilePlayerOpen ? classes+' hidden' : classes}>
          
        <div className="hidden md:flex items-center gap-3 w-[215px]">
          
          <div className="w-full flex items-center">

            {Object.keys(songToPlay).length > 0 &&
            <>
            <div className="flex-col w-full">
              <div className="font-bold truncate">{songToPlay.title}</div>
              <div className="text-sm text-gray-300">{songToPlay.album.artist}</div>
            </div>
            

            <div className="max-w-[240px]">
              <AiOutlineHeart size={25}/>
            </div>
            </>
            }
          </div>

        </div>
        
        {Object.keys(songToPlay).length > 0 &&
        <div className="flex h-full md:hidden object-cover gap-2 overflow-hidden">
          <img src={songToPlay.album.cover} alt=""/>
        </div>
        }

        <div className="flex flex-col gap-1 justify-center items-center pr-10">


          <audio ref={audioElem} src={songToPlay.link}/>

          <div className="flex items-center gap-2">
            <BiShuffle className="text-gray-400 hover:text-white transition" size={20} />
            <BiSkipPrevious className="text-gray-400 hover:text-white transition" size={35}/>
            {Object.keys(songToPlay).length > 0 ? (
                          <div>
            {!isPlaying ? <AiFillPlayCircle onClick={PlayPause} className="hover:scale-125 transition" size={40}/> : <AiFillPauseCircle onClick={PlayPause} className="hover:scale-125 transition" size={40}/>}
            </div>
            ) : (
              <AiFillPlayCircle size={40} className="text-gray-400"/>
            )
            }
            <BiSkipNext className="text-gray-400 hover:text-white transition" size={35}/>
            <BsRepeat className="text-gray-400 hover:text-white transition" size={20}/>
          </div>

          <div className="hidden md:flex items-center gap-2">
          {Object.keys(songToPlay).length > 0 &&
            <>
            <div className="text-xs">
              0:00
            </div>
            <div className="bg-gray-200 h-[5px] w-[200px] md:w-[300px] lg:w-[500px] rounded-md">
            </div>
            <div className="text-xs">
              {songToPlay.duration}
            </div>
            </>
            }
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