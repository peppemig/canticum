import {AiOutlineHeart} from "react-icons/ai"

const SongRowItem = () => {
    return (
        <div className="h-[50px] w-full hover:bg-white/20 transition flex rounded-md overflow-hidden text-white">

            <div className="w-[8%] h-full items-center justify-center flex font-semibold">
                1
            </div>

            <div className="w-[40%] h-full items-center justify-start flex pl-2 gap-2">
                <div className="h-[40px] w-[40px] bg-yellow-200 object-cover">
                    <img src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">ANNA</div>
                    <div className="text-sm">LIBERATO</div>
                </div>
            </div>

            <div className="w-[30%] h-full items-center justify-start flex pl-2 font-bold">
                LIBERATO II
            </div>

            <div className="w-[8%] h-full items-center justify-center flex">
                <AiOutlineHeart size={24} color="white"/>
            </div>

            <div className="w-[14%] h-full items-center justify-start flex pl-2 font-semibold">
                3:28
            </div>

        </div>
    )
}

export default SongRowItem