import { useEffect, useState } from "react"
import Layout from "../Layout"
import axios from "axios"
import RowIntestationAlbum from "../components/ui/RowIntestationAlbum"
import PlaylistRowItem from "../components/ui/PlaylistRowItem"

const Playlists = () => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/playlist').then(res => {
            setPlaylists(res.data)
        })
    }, [])

    return (
        <Layout>
            <div className="bg-gray-800/50 h-[300px] w-full items-center flex p-5 gap-5">
                <div className="h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex text-white text-3xl">
                    A
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Albums</div>
                    <div className="text-4xl font-bold pb-5">All albums</div>
                    <div className="flex items-center gap-2">
                        <div className="font-semibold">ALBUMS</div>
                    </div>
                </div>
            
            </div>

                <div className="flex flex-col p-3 gap-3 pb-40">
                
                <RowIntestationAlbum/>

                {playlists.length > 0 && (
                    playlists.map((playlist, index) => (
                        <PlaylistRowItem
                            index={index} 
                            key={playlist._id}
                            id={playlist._id}
                            playlistTitle={playlist.playlistTitle} 
                            //artist={album.artist}
                            //cover={album.cover}
                            playlistSongs={playlist.playlistSongs}
                            //year={album.year}
                        />
                    ))
                )}

            </div>
        </Layout>
    )
}

export default Playlists