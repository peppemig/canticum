import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

const AlbumPage = ({next, prev, title, handleTitle, artist, handleArtist, year, handleYear, songsNumber, handleSongsNumber, coverLink, handleCoverLink}) => {
  return (
    <div className="scaleIn bg-gray-700 min-h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">



        <div className="flex flex-col items-center justify-center">
            <div className="text-gray-900 font-semibold text-2xl">Come sarà</div>
            <div className="text-gray-900 font-bold text-4xl">il tuo album?</div>
        </div>

        <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">Titolo</label>
                <input value={title} onChange={(e) => handleTitle(e.target.value)} type="text" name="titolo" id="titolo" placeholder="Titolo" className="py-2 px-3 rounded-md border-none" />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">Nome artista</label>
                <input value={artist} onChange={(e) => handleArtist(e.target.value)} type="text" name="artista" id="artista" placeholder="Artista" className="py-2 px-3 rounded-md border-none"/>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">N. Brani</label>
                <input value={songsNumber} onChange={(e) => handleSongsNumber(e.target.value)} type="number" name="nbrani" id="nbrani" placeholder="Numero brani" className="py-2 px-3 rounded-md border-none"/>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">Anno</label>
                <input value={year} onChange={(e) => handleYear(e.target.value)} type="number" name="anno" id="anno" placeholder="Anno" className="py-2 px-3 rounded-md border-none"/>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-white font-semibold">Copertina</label>
                <input value={coverLink} onChange={(e) => handleCoverLink(e.target.value)} type="text" name="copertina" id="copertina" placeholder="Link copertina" className="py-2 px-3 rounded-md border-none"/>
            </div>
            

        </div>

        <div className="flex gap-2 pb-10">

            <div onClick={prev} className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pr-5 pl-2 py-2 rounded-lg font-semibold flex items-center">
                <MdNavigateBefore size={30}/>
                <div className="font-semibold">Indietro</div>
            </div>

            <div onClick={next} className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pl-5 pr-2 py-2 rounded-lg font-semibold flex items-center">
                <div className="font-semibold">Continua</div>
                <MdNavigateNext size={30}/>
            </div>
            
        </div>


    </div>
)
}

export default AlbumPage