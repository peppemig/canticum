import {AiOutlineSearch, AiOutlineHome, AiOutlineHeart} from "react-icons/ai"
import {MdOutlineCategory} from "react-icons/md" 
import { useNavigate } from "react-router-dom"

const MobileNav = () => {
    const navigate = useNavigate()

    return (
        <div className="flex h-[70px] fixed items-center justify-between bottom-0 w-full md:hidden bg-gray-800 py-5 px-12">
            
            <div onClick={() => navigate('/')} className="flex flex-col items-center justify-center">
                <AiOutlineHome size={25} color="white"/>
                <div className="font-semibold text-white">Home</div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <AiOutlineSearch size={25} color="white" />
                <div className="font-semibold text-white">Cerca</div>
            </div>

            <div onClick={() => navigate('/albums')} className="flex flex-col items-center justify-center">
                <MdOutlineCategory size={25} color="white"/>
                <div className="font-semibold text-white">Albums</div>
            </div>

            <div onClick={() => navigate('/mobilePlayer/asd')} className="flex flex-col items-center justify-center">
                <AiOutlineHeart size={25} color="white"/>
                <div className="font-semibold text-white">In ascolto</div>
            </div>

        </div>
    )
}

export default MobileNav