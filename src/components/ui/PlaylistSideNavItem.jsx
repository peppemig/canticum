import {RiPlayList2Fill} from "react-icons/ri"
import {AiFillDelete} from "react-icons/ai"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const PlaylistSideNavItem = ({playlist, setPlaylists}) => {
    const playlistId = playlist._id
    const navigate = useNavigate()

    const deletePlaylist = async () => {
        await axios.delete(`http://localhost:5000/api/playlist/${playlistId}`)
        await axios.get('http://localhost:5000/api/playlist').then(res => setPlaylists(res.data))
    }

    return(
        <div className="flex gap-2 hover:bg-gray-200 hover:text-black transition cursor-pointer p-2 rounded-md justify-between">
            <div onClick={() => navigate(`/playlist/${playlistId}`)} className="flex min-w-[80%] w-[80%] gap-2">
                <RiPlayList2Fill size={20}/>
                <div className="flex truncate overflow-hidden">{playlist.playlistTitle}</div>
            </div>
            <div onClick={deletePlaylist} className="flex bg-red-500 rounded-md p-1 text-white items-center justify-center"><AiFillDelete color="white" size={15}/></div>
        </div>
    )
}

export default PlaylistSideNavItem