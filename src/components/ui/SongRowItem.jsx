import { useState } from "react"
import {AiOutlineHeart} from "react-icons/ai"
import {BsFillPlayFill} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addCurrentSong } from "../../redux/actions/currentSongActions"

const SongRowItem = ({song, album, n}) => {
    const [isHovering, setIsHovering] = useState(false)
    const dispatch = useDispatch()
    const songId = song._id

    const setCurrentSong = () => {
        dispatch(addCurrentSong(songId))
    }

    const HandleMouseOver = () => {
        setIsHovering(true)
    }
  
    const HandleMouseOut = () => {
        setIsHovering(false)
    }

    return (
        <div onTouchEnd={setCurrentSong} onDoubleClick={setCurrentSong} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut} target="_blank" href={song?.link} className="h-[50px] w-full hover:bg-white/20 transition flex rounded-md justify-between overflow-hidden text-white">

            <div className="w-[8%] h-full items-center justify-center flex font-semibold">
                {isHovering ? 
                <BsFillPlayFill onClick={setCurrentSong} size={25}/> 
                : 
                n+1}
            </div>

            <div className="w-[40%] max-w-[40%] h-full overflow-hidden items-center justify-start flex pl-2 gap-2">
                <div className="h-[40px] w-[40px] min-w-[40px] bg-yellow-200 object-cover">
                    <img src={album.cover}/>
                </div>
                <div className="flex flex-col w-full">
                    <div className="font-bold truncate">{song.title}</div>
                    <div className="text-sm">{album.artist}</div>
                </div>
            </div>

            <div className="hidden w-[30%] h-full items-center justify-start md:flex pl-2 font-bold">
                {album.albumTitle}
            </div>

            <div className="w-[8%] h-full items-center justify-center flex">
                <AiOutlineHeart size={24} color="white"/>
            </div>

            <div className="w-[14%] h-full items-center justify-start flex pl-2 font-semibold">
                {song.duration}
            </div>

        </div>
    )
}

export default SongRowItem