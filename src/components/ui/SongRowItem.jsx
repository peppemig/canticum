import { useState, useEffect } from "react"
import {AiOutlineHeart, AiOutlineCloseCircle, AiFillHeart, AiFillCloseCircle} from "react-icons/ai"
import {BsFillPlayFill, BsThreeDotsVertical} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addCurrentSong } from "../../redux/actions/currentSongActions"
import axios from "axios"
import { toast } from "react-hot-toast"
import PlaylistAddItem from "./PlaylistAddItem"


const SongRowItem = ({favs, setFavs, song, album, n, favId, location, playlists}) => {
    const [isHovering, setIsHovering] = useState(false)
    const [hoverOnFav, setHoverOnFav] = useState(false)
    const [showPlaylistMenu, setShowPlaylistMenu] = useState(false)
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

    const HandleFavMouseOver = () => {
        setHoverOnFav(true)
    }

    const HandleFavMouseOut = () => {
        setHoverOnFav(false)
    }

    const saveFav = () => {
        axios.post('http://localhost:5000/api/fav', {favSong: song._id, album: album._id})
        .then(response => {
            if(response.status === 200){
                toast.success("Brano aggiunto ai preferiti")
            }
        })
        .catch((error) => {
            if(error.response.status === 409){
                toast.error(error.response.data)
            }
        })
    }

    const deleteFav = async () => {
        
        await axios.delete(`http://localhost:5000/api/fav/${favId}`)
        .then(res => {
            if(res.status === 200){
                toast.success("Brano eliminato dai preferiti")
            }
        })

        await axios.get('http://localhost:5000/api/fav')
        .then(res => setFavs(res.data))
    }

    return (
        <div onTouchEnd={setCurrentSong} onDoubleClick={setCurrentSong} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut} target="_blank" href={song?.link} className="h-[50px] w-full hover:bg-white/20 transition flex relative rounded-md justify-between text-white">

            <div className="w-[8%] h-full items-center justify-center flex font-semibold">
                {isHovering ? 
                <BsFillPlayFill onClick={setCurrentSong} size={25}/> 
                : 
                n+1}
            </div>

            <div className="w-[40%] max-w-[40%] h-full items-center justify-start flex pl-2 gap-2">
                <div className="min-w-[40px] w-[40px] min-h-[40px] h-[40px]">
                    <img src={album.cover}/>
                </div>
                <div className="flex flex-col w-full overflow-hidden">
                    <div className="font-bold truncate">{song.title}</div>
                    <div className="text-sm">{album.artist}</div>
                </div>
            </div>

            <div className="hidden w-[30%] h-full items-center justify-start md:flex pl-2 font-bold">
                {album.albumTitle}
            </div>
            
            <div onClick={() => setShowPlaylistMenu(!showPlaylistMenu)} className="relative flex items-center cursor-pointer">
                <BsThreeDotsVertical/>
                {showPlaylistMenu &&
                    <div className="scaleIn z-10 absolute w-[200px] h-auto max-h-[200px] overflow-y-auto bg-gray-900 border-[1px] border-white rounded-md top-10 -left-20 flex flex-col p-3">
                        <div className="mb-2">Aggiungi alla playlist</div>
                        {playlists.length > 0 && (
                            playlists.map(playlist => (
                                <PlaylistAddItem playlist={playlist} playlistId={playlist._id} songId={songId} key={playlist._id}/>
                            ))
                        )}
                    </div>
                }
            </div>

            <div onMouseOver={HandleFavMouseOver} onMouseOut={HandleFavMouseOut} onClick={location === '/favorites' ? () => deleteFav() : () => saveFav()} className="w-[8%] h-full items-center justify-center flex">
                {location === '/favorites' ? 
                    (hoverOnFav ? <AiFillCloseCircle size={24} color="white" className="cursor-pointer"/> : <AiOutlineCloseCircle size={24} color="white" className="cursor-pointer"/>) : 
                    (hoverOnFav ? <AiFillHeart size={24} color="white" className="cursor-pointer"/>  : <AiOutlineHeart size={24} color="white" className="cursor-pointer"/>)
                }
            </div>

            <div className="w-[14%] h-full items-center justify-start flex pl-2 font-semibold">
                {song.duration}
            </div>

        </div>
    )
}

export default SongRowItem