const Card = () => {
    return (
    <div className={"bg-gray-800 cursor-pointer transition hover:bg-gray-700 w-[200px] flex-col h-[250px] rounded-md p-3 justify-center items-center flex"}>
        <div className="w-full h-full">

          <div className="w-full rounded-md flex">
          <img className="object-cover h-50 w-50" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
          </div>

          <div className="p-2 flex-1 items-center flex-col">
            <div className="font-bold text-white">Daily Mix 1</div>
            <div className="font-semibold text-white font-md text-sm truncate">Artista 1, Arista 2</div>
          </div>

        </div>
    </div>
    )
}

export default Card