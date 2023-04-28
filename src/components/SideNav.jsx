import {AiOutlineSearch, AiOutlineDownCircle, AiOutlineHome, AiOutlinePlusCircle, AiOutlineHeart} from "react-icons/ai"
import {MdOutlineCategory} from "react-icons/md"
import {ImMusic} from "react-icons/im"
import SideNavItem from "./ui/SideNavItem"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
import PlaylistSideNavItem from "./ui/PlaylistSideNavItem"


const SideNav = () => {
    const navigate = useNavigate()
    const [songToPlay, setSongToPlay] = useState({})
    const [hoverOnCover, setHoverOnCover] = useState(false)
    const [showCreatePlaylist, setShowCreatePlaylist] = useState(false)
    const [playlistTitle, setPlaylistTitle] = useState('')
    const [playlists, setPlaylists] = useState([])

    const currentSong = useSelector((state) => state.currentSong.currentSong)

    useEffect(() => {
      if (currentSong !== '') {
        axios.get(`http://localhost:5000/api/song/${currentSong}`).then(response => {
          setSongToPlay(response.data)
        })
      }
    }, [currentSong])

    useEffect(() => {
      axios.get('http://localhost:5000/api/playlist').then(res => setPlaylists(res.data))
    }, [setPlaylists])

    const handleHoverIn = () => {
      setHoverOnCover(true)
    }

    const handleHoverOut = () => {
      setHoverOnCover(false)
    }

    const handleCreatePlaylist = async () => {
      await axios.post('http://localhost:5000/api/playlist', {playlistTitle: playlistTitle}).then(res => console.log(res))
      setShowCreatePlaylist(!showCreatePlaylist)
      await axios.get('http://localhost:5000/api/playlist').then(res => setPlaylists(res.data))
    }

    return (
            <div className='hidden md:flex bg-gray-800 min-w-[250px] max-w-[250px] flex-col justify-between'>

              <div className="flex flex-col gap-10 p-5">

                <div className='flex flex-col text-gray-300 text-sm font-semibold gap-2'>

                  <div className="flex gap-2 hover:text-white transition items-center cursor-pointer mb-3">
                    <ImMusic size={40}/>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold">Canticum</div>
                      <div className="text-xs">Music for you!</div>
                    </div>
                  </div>

                  <div onClick={() => navigate('/')}>
                    <SideNavItem icon={<AiOutlineHome size={30}/>} text='Home'/>
                  </div>
                  <SideNavItem icon={<AiOutlineSearch size={30}/>} text='Cerca'/>
                  <div onClick={() => navigate('/albums')}>
                  <SideNavItem icon={<MdOutlineCategory size={30}/>} text='Albums'/>
                  </div>

                </div>

                <div className="flex flex-col text-gray-300 text-sm font-semibold gap-2">

                    <div onClick={() => navigate('/favorites')}>
                      <SideNavItem icon={<AiOutlineHeart size={30}/>} text='Brani che ti piacciono'/>
                    </div>

                    <div className="relative flex mb-3">
                    <SideNavItem onClick={() => setShowCreatePlaylist(!showCreatePlaylist)} icon={<AiOutlinePlusCircle size={30}/>} text='Crea playlist'/>
                      {showCreatePlaylist &&
                      <div className="z-10 fadeIn absolute flex p-3 gap-2 items-center justify-center flex-col bg-gray-900 border-[1px] border-white w-auto left-32 rounded-md">
                        <div className="text-white">Nome playlist</div>
                        <input value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)} type="text" className="rounded-md p-2 text-black mb-3"/>
                        <div onClick={handleCreatePlaylist} className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition rounded-md py-1 px-3 cursor-pointer text-md">Crea</div>
                      </div>
                      }
                    </div>
                    
                    {playlists.length > 0 &&
                    <>
                    <div className="h-[2px] w-full flex bg-gray-300"></div>
                    
                    <div className="text-lg">Playlists</div>

                    <div className="h-auto max-h-[200px] w-full flex flex-col bg-gray-700 rounded-md overflow-y-auto overflow-x-hidden p-2">
                      
                      {playlists.length > 0 && (
                        playlists.map(playlist => (
                          <PlaylistSideNavItem key={playlist._id} playlist={playlist} setPlaylists={setPlaylists}/>
                        ))
                      )
                      }

                    </div>
                    </>
                    }
                     
                </div>

              </div>

              <div onMouseOver={handleHoverIn} onMouseOut={handleHoverOut} className="h-[250px] relative object-cover mb-24">
                {Object.keys(songToPlay).length > 0 &&
                <>
                {hoverOnCover && <AiOutlineDownCircle size={30} color="white" className="fadeIn absolute top-1 right-2 bg-black/50 rounded-full cursor-pointer"/>}
                <img src={songToPlay.album.cover}/>
                </>
                }
              </div>

            </div>
    )
}

export default SideNav