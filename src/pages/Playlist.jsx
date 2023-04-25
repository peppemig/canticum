import { useParams } from "react-router-dom"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import axios from "axios"
import RowIntestation from "../components/ui/RowIntestation"

const Playlist = () => {
    const {id} = useParams()
    const [playlist, setPlaylist] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/playlist/${id}`).then(res => {
            setPlaylist(res.data)
        })
    }, [id])

    return(
        <Layout>
            {Object.keys(playlist).length > 0 &&
            <div>
            <div className="bg-gray-800/50 h-[300px] w-full items-center flex p-5 gap-5">

                <div className="max-h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex">
                    <img className="object-cover" src=""/>
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Playlist</div>
                    <div className="text-4xl font-bold pb-5 truncate">{playlist.playlistTitle}</div>
                    <div className="flex gap-2 flex-col">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-500 h-[35px] max-w-[35px] rounded-full overflow-hidden">
                                <img className="object-cover" src=""/>
                            </div>
                            <div className="font-semibold">TEST</div>
                        </div>
                        <div className="flex md:flex-row gap-2">
                            <div className="font-bold">TEST</div>
                            <div>•</div>
                            <div>{playlist.playlistSongs.length} brani</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-3 pb-40">
                
                <RowIntestation/>

                {playlist.playlistSongs.length > 0 && playlist.playlistSongs.map((song, index) => (
                    <div className="text-white">{song.title}</div>
                ))
                }



            </div>
            </div>
            }
        </Layout>
    )
}

export default Playlist