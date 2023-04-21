import { useState } from "react"
import { BounceLoader } from "react-spinners"
import axios from "axios"

const CreatingAlbumPage = ({songsArray, title, artist, year, coverLink}) => {
    const [loading, setLoading] = useState(false)
    let albumIdToUpload = '';
    let songsIdToUpload = [];

    console.log(songsArray)

    const uploadAlbumAndSongs = async () => {
        setLoading(true)

        await uploadAlbum()

        //console.log(albumIdToUpload)

        await uploadSongs()

        //console.log(songsIdToUpload)

        await setSongsInAlbum()

        setLoading(false)
    }

    const uploadAlbum = async () => {
        const uploadedAlbum = await axios.post('http://localhost:5000/api/album', {albumTitle: title, artist: artist, cover: coverLink, year: parseInt(year), songs: []})
        albumIdToUpload = uploadedAlbum.data._id
    }
    
    const uploadSongs = async () => {
        const uploadedSong = await axios.post('http://localhost:5000/api/song', {title: songsArray[0].title, duration: songsArray[0].duration, album: albumIdToUpload, link: 'empty'})
        songsIdToUpload.push(uploadedSong.data._id)
        //const reqs = songsArray.map((song) => axios.post('http://localhost:5000/api/song', {title: song.title, duration: song.duration, album: albumIdToUpload, link: 'empty'}))
        //axios.all(reqs).then((responses) => {
        //    responses.forEach((resp) => {
        //        songsIdToUpload.push(resp.data._id)
        //    })
        //})
    }

    const setSongsInAlbum = async () => {
        console.log('STO SETTANDO LE CANZONI')
        console.log(songsIdToUpload)
        console.log('STO MAPPANDO')
        const updatedAlbumWithSong = await axios.put(`http://localhost:5000/api/album/${albumIdToUpload}`, {songId: songsIdToUpload[0]})
        console.log('UPDATED ALBUM!!! ', updatedAlbumWithSong)
    }


    
  return (
    
    <div className="scaleIn bg-gray-700 h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">

        <div onClick={() => uploadAlbumAndSongs()}>UPLOAD</div>

        {loading ? <BounceLoader/> : <div className="text-white font-bold text-xl">ALBUM CARICATO</div>}

    </div>
  )
}

export default CreatingAlbumPage