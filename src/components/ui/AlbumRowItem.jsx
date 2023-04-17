import { useNavigate } from "react-router-dom"

const AlbumRowItem = ({id, albumTitle, artist, cover, songs, year}) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/album/${id}`)} className="h-[50px] w-full hover:bg-white/20 transition flex rounded-md overflow-hidden text-white">

            <div className="w-[8%] h-full items-center justify-center flex font-semibold">
                1
            </div>

            <div className="w-[40%] h-full items-center justify-start flex pl-2 gap-2">
                <div className="h-[40px] w-[40px] bg-yellow-200 object-cover">
                    <img src={cover}/>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">{albumTitle}</div>
                </div>
            </div>

            <div className="w-[30%] h-full items-center justify-start flex pl-2 font-bold">
                {artist}
            </div>

            <div className="w-[8%] h-full items-center justify-start flex">
                {year}
            </div>

            <div className="w-[14%] h-full items-center justify-start flex pl-2 font-semibold">
                {songs.length}
            </div>

        </div>
    )
}

export default AlbumRowItem