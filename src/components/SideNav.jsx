import {AiOutlineSearch, AiOutlineHome, AiOutlinePlusCircle, AiOutlineHeart} from "react-icons/ai"
import {MdOutlineCategory} from "react-icons/md" 
import {ImMusic} from "react-icons/im"
import SideNavItem from "./ui/SideNavItem"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"


const SideNav = () => {
    const navigate = useNavigate()
    const [songToPlay, setSongToPlay] = useState({})

    const currentSong = useSelector((state) => state.currentSong.currentSong)

    useEffect(() => {
      if (currentSong !== '') {
        axios.get(`http://localhost:5000/api/song/${currentSong}`).then(response => {
          setSongToPlay(response.data)
        })
      }
    }, [currentSong])

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

                    <SideNavItem icon={<AiOutlinePlusCircle size={30}/>} text='Crea playlist'/>

                    <div onClick={() => navigate('/favorites')}>
                      <SideNavItem icon={<AiOutlineHeart size={30}/>} text='Brani che ti piacciono'/>
                    </div>
                     

                </div>

              </div>

              <div className="h-[250px] object-cover">
                {Object.keys(songToPlay).length > 0 &&
                <img src={songToPlay.album.cover}/>
                }
              </div>

            </div>
    )
}

export default SideNav