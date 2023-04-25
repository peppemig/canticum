import { useNavigate } from "react-router-dom"

const PlaylistRowItem = ({index, id, playlistTitle, playlistSongs}) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/playlist/${id}`)} className="h-[50px] w-full hover:bg-white/20 transition flex rounded-md overflow-hidden text-white">

            <div className="w-[8%] h-full items-center justify-center flex font-semibold">
                {index+1}
            </div>

            <div className="w-[40%] max-w-[40%] h-full items-center justify-start flex pl-2 gap-2">
                <div className="min-w-[40px] w-[40px] min-h-[40px] h-[40px]">
                    <img src=""/>
                </div>
                <div className="flex flex-col w-full overflow-hidden">
                    <div className="font-bold truncate">{playlistTitle}</div>
                </div>
            </div>

            <div className="w-[30%] h-full items-center justify-start flex pl-2 font-bold overflow-hidden">
                Giuseppe Migliozzi
            </div>

            <div className="w-[22%] h-full items-center justify-center flex pl-2 font-semibold">
                {playlistSongs.length}
            </div>

        </div>
    )
}

export default PlaylistRowItem