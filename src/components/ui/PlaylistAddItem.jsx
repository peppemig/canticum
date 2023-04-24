import {RiPlayList2Fill} from "react-icons/ri"
import axios from "axios" 

const PlaylistAddItem = ({playlist, playlistId, songId}) => {

    const addSongToPlaylist = () => {
        axios.put(`http://localhost:5000/api/playlist/${playlistId}`, {songId: songId})
    }

    return (
        <div onClick={addSongToPlaylist} className="flex p-2 items-center gap-2 hover:bg-gray-300 hover:text-black transition rounded-md">
            <RiPlayList2Fill size={20}/>
            <div>{playlist.playlistTitle}</div>
        </div>
    )
}

export default PlaylistAddItem