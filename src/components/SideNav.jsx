import {AiOutlineSearch, AiOutlineHome, AiOutlinePlusCircle, AiOutlineHeart} from "react-icons/ai"
import {MdOutlineCategory} from "react-icons/md" 
import {ImMusic} from "react-icons/im"
import SideNavItem from "./ui/SideNavItem"

const SideNav = () => {
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

                  <SideNavItem icon={<AiOutlineHome size={30}/>} text='Home'/>
                  <SideNavItem icon={<AiOutlineSearch size={30}/>} text='Cerca'/>
                  <SideNavItem icon={<MdOutlineCategory size={30}/>} text='La tua libreria'/>

                </div>

                <div className="flex flex-col text-gray-300 text-sm font-semibold gap-2">

                    <SideNavItem icon={<AiOutlinePlusCircle size={30}/>} text='Crea playlist'/>
                    <SideNavItem icon={<AiOutlineHeart size={30}/>} text='Brani che ti piacciono'/>
                    

                </div>

              </div>

              <div className="h-[250px] object-cover">
                <img src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
              </div>

            </div>
    )
}

export default SideNav