import { useState } from "react"
import { BounceLoader } from "react-spinners"
import axios from "axios"

const CreatingAlbumPage = ({songsArray, title, artist, year, coverLink}) => {
    const [loading, setLoading] = useState(null)
    let albumIdToUpload = '';
    let songsIdToUpload = [];

    const uploadAlbumAndSongs = async () => {
        setLoading(true)
        await uploadAlbum()
        await uploadSongs()
        await setSongsInAlbum()
        setLoading(false)
    }

    const uploadAlbum = async () => {
        const uploadedAlbum = await axios.post('http://localhost:5000/api/album', {albumTitle: title, artist: artist, cover: coverLink, year: parseInt(year), songs: []})
        albumIdToUpload = uploadedAlbum.data._id
    }
    
    const uploadSongs = async () => {

        for (const singleSong of songsArray) {
            try {
                const response = await axios.post('http://localhost:5000/api/song', {title: singleSong.title, duration: singleSong.duration, album: albumIdToUpload, link: 'empty'})
                songsIdToUpload.push(response.data._id)
            } catch (error) {
                console.error(error)
            }
        }

    }

    const setSongsInAlbum = async () => {

        for (const singleSongId of songsIdToUpload) {
            try {
               const response = await axios.put(`http://localhost:5000/api/album/${albumIdToUpload}`, {songId: singleSongId})
               console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
    }


    
  return (
    
    <div className="scaleIn bg-gray-700 h-auto min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">


        <div className="flex flex-col items-center justify-center gap-4">

            <div className="flex flex-col items-center text-white">
                <div className="font-semibold text-xl mb-3">ALBUM RECAP</div>
                <div className="font-bold text-xl">TITOLO: {title}</div>
                <div className="font-bold text-xl">ARTISTA: {artist}</div>
            </div>

            <div className="bg-red-500 max-w-[300px] w-[300px] max-h-[300px] h-[300px]">
                <img src={coverLink} alt="" />
            </div>

            <div className="text-white font-semibold text-lg">N. BRANI: {songsArray.length}</div>
            <div className="flex flex-col gap-1 items-center border-[1px] w-full p-2 rounded-md">
                {songsArray.map((song,index) => (
                    <div className="text-white text-lg font-semibold" key={index}>{index+1}. {song.title}</div>
                ))}
            </div>
        </div>

        <div className="bg-gray-900 text-white font-bold px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-white transition cursor-pointer" onClick={() => uploadAlbumAndSongs()}>CARICA LA TUA MUSICA!</div>
        {loading ? <BounceLoader/> : ""}

    </div>
  )
}

export default CreatingAlbumPage