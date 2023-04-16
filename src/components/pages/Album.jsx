import { useParams } from "react-router-dom"
import Layout from "../../Layout"
import RowIntestation from "../ui/RowIntestation"
import SongRowItem from "../ui/SongRowItem"

const Album = () => {
    const {id} = useParams()
    console.log(id)

    return (
        
        <Layout>
            <div className="bg-gray-800/50 h-[300px] w-full items-center flex p-5 gap-5">
                <div className="h-[200px] w-[200px] bg-neutral-800 rounded-md mt-20 items-center justify-center flex">
                    <img className="object-cover" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                </div>

                <div className="flex flex-col mt-20 text-white">
                    <div className="font-semibold text-lg">Album</div>
                    <div className="text-4xl font-bold pb-5">LIBERATO II</div>
                    <div className="flex items-center gap-2">
                        <div className="bg-red-500 h-[35px] w-[35px] rounded-full overflow-hidden">
                            <img className="object-cover" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                        </div>
                        <div className="font-semibold">LIBERATO</div>
                        <div>• 2022</div>
                        <div>• 7 brani</div>
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

            </div>
        </Layout>
    )
}

export default Album