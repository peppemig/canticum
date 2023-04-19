import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIsMobilePlayerOpen } from "../redux/actions/mobilePlayerOpenActions"
import { useNavigate } from "react-router-dom"
import {AiOutlineCloseCircle, AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai"
import {BiSkipPrevious, BiSkipNext, BiShuffle} from "react-icons/bi"
import {BsRepeat} from "react-icons/bs"
import axios from "axios"

const MobilePlayerPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isPlaying, setIsPlaying] = useState(false)
    const [songToPlay, setSongToPlay] = useState({})
    const audioElem = useRef()

    const currentSong = useSelector((state) => state.currentSong.currentSong)

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

    const setStatus = () => {
        dispatch(setIsMobilePlayerOpen(true))
    }

    const setStatusClosed = () => {
        dispatch(setIsMobilePlayerOpen(false))
        navigate('/albums')
    }

    useEffect(() => {
        setStatus()
    }, [])



    return (
        
        <div style={{backgroundImage: 'url(https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj)'}} className="h-[100vh] flex flex-col p-5 overflow-y-auto overflow-x-hidden backdrop-blur-lg">

            <div className="flex relative items-center flex-col gap-8 bg-gray-500/30 backdrop-blur pb-5 pt-5 rounded-xl">

                <AiOutlineCloseCircle color="white" size={30} className="flex absolute left-4" onClick={() => setStatusClosed()}/>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-white text-sm font-semibold">RIPRODUZIONE DALL'ARTISTA</div>
                    <div className="text-white text-lg font-bold">LIBERATO</div>
                </div>

                <div className="bg-blue-500 w-[80%] h-auto object-cover">
                    <img src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-2xl text-white font-bold">TU T'E SCURDAT E ME</div>
                    <div className="text-lg font-semibold text-white">LIBERATO</div>
                </div>

                <div className="flex flex-col w-full items-center gap-2">
                    <div className="rounded-full w-[90%] h-[5px] bg-white"></div>
                    <div className="flex justify-between w-[90%]">
                        <div className="flex text-white font-semibold">0:00</div>
                        <div className="flex text-white font-semibold">3:28</div>
                    </div>
                </div>

                <div className="flex w-[90%] justify-center items-center gap-4">
                    <audio ref={audioElem} src={songToPlay.link}/>
                    <BiShuffle size={28} color="white"/>
                    <BiSkipPrevious size={50} color="white"/>
                    <AiFillPlayCircle size={70} color="white"/>
                    <BiSkipNext size={50} color="white"/>
                    <BsRepeat size={26} color="white"/>
                </div>

                <div className="bg-gray-300/30 w-[90%] h-[500px] rounded-xl flex items-center justify-center text-white font-semibold">
                    LYRICS
                </div>
            </div>

            
        </div>
    )
}

export default MobilePlayerPage