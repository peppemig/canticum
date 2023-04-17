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

                <div className="h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex">
                    <img className="object-cover" src={album.cover}/>
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Album</div>
                    <div className="text-4xl font-bold pb-5">{album.albumTitle}</div>
                    <div className="flex items-center gap-2">
                        <div className="bg-red-500 h-[35px] w-[35px] rounded-full overflow-hidden">
                            <img className="object-cover" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                        </div>
                        <div className="font-semibold">{album.artist}</div>
                        <div>• {album.year}</div>
                        <div>• {album.songs.length} brani</div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col p-3 gap-3">
                
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