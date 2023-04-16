import Layout from "../Layout"
import {AiOutlineHeart} from "react-icons/ai"
import SongRowItem from "../components/ui/SongRowItem"
import RowIntestation from "../components/ui/RowIntestation"

const Favorites = () => {
    return (
        <Layout>
            <div className="bg-gray-800/50 h-[300px] w-full items-center flex p-5 gap-5">
                <div className="h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex">
                    <AiOutlineHeart size={70} color="white"/>
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Playlist</div>
                    <div className="text-4xl font-bold pb-5">Brani che ti piacciono</div>
                    <div className="flex items-center gap-2">
                        <div className="bg-red-500 h-[35px] w-[35px] rounded-full overflow-hidden">
                            <img className="object-cover" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                        </div>
                        <div className="font-semibold">Giuseppe Migliozzi</div>
                    </div>
                </div>

            </div>
            
            <div className="flex flex-col p-3 gap-3">
                
                <RowIntestation/>

                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>
                <SongRowItem/>


            </div>

        </Layout>
    )
}

export default Favorites