import { useEffect, useState } from "react"
import Layout from "../Layout"
import axios from "axios"
import RowIntestationAlbum from "../components/ui/RowIntestationAlbum"
import AlbumRowItem from "../components/ui/AlbumRowItem"

const Albums = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/album').then(response => {
            console.log(response.data)
            setAlbums(response.data)
        })
    }, [])

    return(
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

                <div className="flex flex-col p-3 gap-3">
                
                <RowIntestationAlbum/>

                {albums.length > 0 && (
                    albums.map(album => (
                        <AlbumRowItem 
                            key={album._id}
                            id={album._id}
                            albumTitle={album.albumTitle} 
                            artist={album.artist}
                            cover={album.cover}
                            songs={album.songs}
                            year={album.year}
                        />
                    ))
                )}

            </div>
        </Layout>
    )
}

export default Albums