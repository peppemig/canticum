import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import axios from "axios";
import {BarLoader} from "react-spinners"

const AlbumPage = ({
  next,
  prev,
  title,
  handleTitle,
  artist,
  handleArtist,
  year,
  handleYear,
  songsNumber,
  handleSongsNumber,
  coverLink,
  handleCoverLink,
}) => {

  const activeButtonClasses = "bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pl-5 pr-2 py-2 rounded-lg font-semibold flex items-center"
  const disabledButtonClasses = "bg-gray-400 cursor-not-allowed pointer-events-none text-white pl-5 pr-2 py-2 rounded-lg font-semibold flex items-center"
  const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  const [imageFormatError, setImageFormatError] = useState('')
  const [imageUploadStatus, setImageUploadStatus] = useState({isLoading: false, error: ''})
  const [nextButtonClasses, setNextButtonClasses] = useState(disabledButtonClasses)



  const handleUpload = async (file) => {
    const fileToUpload = file[0];

    if (validFileTypes.includes(fileToUpload.type)) {
        setImageFormatError("")
        
        const form = new FormData()
        form.append('image', fileToUpload)
        
        setImageUploadStatus(prev => ({...prev, isLoading: true}))

        axios.post('http://localhost:5000/api/images', form).then((res) => {
            setImageUploadStatus({isLoading: false, error: ''})
            handleCoverLink(res.data[0])
        }).catch(err => {
            setImageUploadStatus({isLoading: false, error: err})
        })
        
    } else {
        setImageFormatError("Formato file non corretto! Formati supportati: jpg, jpeg e png")
    }

  };

  useEffect(() => {
    if (title === '' || artist === ''|| songsNumber === '' || year === '' || coverLink === '') {
      setNextButtonClasses(disabledButtonClasses)
    } else {
      setNextButtonClasses(activeButtonClasses)
    }
  }, [title, artist, songsNumber, year, coverLink])

  const handleSubmit = () => {
    if (title !== '' && artist !== '' && songsNumber !== '' && year !== '' && coverLink !== '') {
      next()
    } else {
      console.log('SOMETHING IS MISSING')
    }
  }


  return (
    <div className="scaleIn bg-gray-700 min-h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-gray-900 font-semibold text-2xl">Come sarà</div>
        <div className="text-gray-900 font-bold text-4xl">il tuo album?</div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Titolo</label>
          <input
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
            type="text"
            name="titolo"
            id="titolo"
            placeholder="Titolo"
            className="py-2 px-3 rounded-md border-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Nome artista</label>
          <input
            value={artist}
            onChange={(e) => handleArtist(e.target.value)}
            type="text"
            name="artista"
            id="artista"
            placeholder="Artista"
            className="py-2 px-3 rounded-md border-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">N. Brani</label>
          <input
            value={songsNumber}
            onChange={(e) => handleSongsNumber(e.target.value)}
            type="number"
            name="nbrani"
            id="nbrani"
            placeholder="Numero brani"
            className="py-2 px-3 rounded-md border-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Anno</label>
          <input
            value={year}
            onChange={(e) => handleYear(e.target.value)}
            type="number"
            name="anno"
            id="anno"
            placeholder="Anno"
            className="py-2 px-3 rounded-md border-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Copertina</label>
          <input
            //value={coverLink}
            //onChange={(e) => handleCoverLink(e.target.value)}
            type="text"
            name="copertina"
            id="copertina"
            placeholder="Link copertina"
            className="py-2 px-3 rounded-md border-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-white font-semibold">Carica copertina</label>
          <input
            onChange={(e) => handleUpload(e.target.files)}
            type="file"
            className="py-2 px-3 rounded-md border-none bg-gray-900 text-white"
          />
          {imageFormatError !== '' && (
            <div className="text-red-500 flex w-[250px] max-w-[250px] items-center justify-center">{imageFormatError}</div>
            )
          }
          {imageUploadStatus.isLoading && (
            <div className="flex flex-col items-center text-center justify-center text-white font-semibold">
            <div>CARICAMENTO IN CORSO...</div>
            <BarLoader color="#ffffff"/>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 pb-10">
        <div
          onClick={prev}
          className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pr-5 pl-2 py-2 rounded-lg font-semibold flex items-center"
        >
          <MdNavigateBefore size={30} />
          <div className="font-semibold">Indietro</div>
        </div>

        <div
          onClick={() => handleSubmit()}
          className={nextButtonClasses}
        >
          <div className="font-semibold">Continua</div>
          <MdNavigateNext size={30} />
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
