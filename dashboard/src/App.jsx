import { useEffect, useState } from "react"
import StartPage from "./components/StartPage"
import AlbumPage from "./components/AlbumPage"
import SongsPage from "./components/SongsPage"
import CreatingAlbumPage from "./components/CreatingAlbumPage"

function App() {
  const [page, setPage] = useState(0)
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [year, setYear] = useState(undefined)
  const [songsNumber, setSongsNumber] = useState(undefined)
  const [coverLink, setCoverLink] = useState('')
  const [songs, setSongs] = useState([])

  const handleTitle = (title) => {
    setTitle(title)
  }

  const handleArtist = (artist) => {
    setArtist(artist)
  }

  const handleYear = (year) => {
    setYear(year)
  }

  const handleSongsNumber = (snumber) => {
    setSongsNumber(snumber)
  }

  const handleCoverLink = (link) => {
    setCoverLink(link)
  }

  const handleSongsArray = (songs) => {
    setSongs(songs)
  }

  return (
    <div className="h-screen flex bg-gray-900 items-center justify-center">

      <div className="fixed top-10 text-white font-bold text-4xl">Canticum.</div>

        {
          page === 0 ? <StartPage next={() => setPage(page+1)}/> : 

          page === 1 ? <AlbumPage 
                          next={() => setPage(page+1)} 
                          prev={() => setPage(page-1)}
                          title={title}
                          artist={artist}
                          year={year}
                          songsNumber={songsNumber}
                          coverLink={coverLink}
                          handleTitle={handleTitle}
                          handleArtist={handleArtist}
                          handleYear={handleYear}
                          handleSongsNumber={handleSongsNumber}
                          handleCoverLink={handleCoverLink}
                          /> :

          page === 2 ? <SongsPage
                          handleSongsArray={handleSongsArray}
                          songs={songs}
                          songsNumber={songsNumber}
                          prev={() => setPage(page-1)}
                          submit={() => setPage(page+1)}
                          /> :
          
          page === 3 ? <CreatingAlbumPage
                          songsArray={songs}
                          title={title}
                          artist={artist}
                          year={year}
                          coverLink={coverLink}
                          /> :

          "error"
        }

    </div>
  )
}

export default App
