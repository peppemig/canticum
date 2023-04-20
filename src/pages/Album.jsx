import { useParams } from "react-router-dom"
import Layout from "../Layout"
import RowIntestation from "../components/ui/RowIntestation"
import SongRowItem from "../components/ui/SongRowItem"
import { useEffect, useState } from "react"
import axios from "axios"

const Album = () => {
    const {id} = useParams()
    const [album, setAlbum] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/album/${id}`).then(response => {
            setAlbum(response.data)
        })
    }, [])

    return (
        
        <Layout>
            {Object.keys(album).length > 0 &&
            <div>
            <div className="bg-gray-800/50 h-[300px] w-full items-center flex p-5 gap-5">

                <div className="max-h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex">
                    <img className="object-cover" src={album.cover}/>
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Album</div>
                    <div className="text-4xl font-bold pb-5 truncate">{album.albumTitle}</div>
                    <div className="flex gap-2 flex-col">
                        <div className="flex items-center gap-2">
                            <div className="bg-red-500 h-[35px] max-w-[35px] rounded-full overflow-hidden">
                                <img className="object-cover" src={album.cover}/>
                            </div>
                            <div className="font-semibold">{album.artist}</div>
                        </div>
                        <div className="flex md:flex-row gap-2">
                            <div className="font-bold">{album.year}</div>
                            <div>•</div>
                            <div>{album.songs.length} brani</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-3 pb-40">
                
                <RowIntestation/>

                {album.songs.length > 0 && album.songs.map((song, index) => (
                    <SongRowItem key={song._id} song={song} album={album} n={index}/>
                ))
                }



            </div>
            </div>
            }

        </Layout>
    )
}

export default Album