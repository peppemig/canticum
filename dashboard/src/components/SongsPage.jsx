import { useEffect, useState } from "react"
import { MdNavigateBefore } from "react-icons/md"
import axios from "axios"
import {BarLoader} from "react-spinners"

const SongsPage = ({prev, songsNumber, handleSongsArray, submit}) => {
    //const arr = Array.from(Array(parseInt(songsNumber)).keys())
    const inputClassesEnabled = "py-2 px-3 rounded-md border-none bg-gray-900 text-white"
    const inputClassesDisabled = "py-2 px-3 rounded-md border-none bg-gray-500 text-white pointer-events-none"
    const activeButton = "cursor-pointer bg-gray-900 text-white hover:bg-white hover:text-gray-900 flex items-center justify-center py-2 rounded-full font-bold transition"
    const disabledButton = "bg-gray-300 text-white flex items-center justify-center py-2 rounded-full font-bold cursor-not-allowed pointer-events-none"
    const [checkoutButtonClasses, setCheckoutButtonClasses] = useState(disabledButton)
    const [arr,setArr] = useState(Array.from(Array(parseInt(songsNumber)).keys()))
    const [songFormatError, setSongFormatError] = useState('')
    const [songUploadStatus, setSongUploadStatus] = useState({isLoading: false, error: ''})
    const validFileTypes = ["audio/mpeg"]

    const setArrItem = (index, title) => {
        let newArr = [...arr]
        newArr[index] = {title: title, duration: '4:20'}
        setArr(newArr)
    }

    const handleSubmit = () => {
        handleSongsArray(arr);
        submit();
    }

    useEffect(() => {
        let conditionArr = []

        arr.map(item => {
            if (item.title !== undefined && item.title !== '') {
                conditionArr.push(item)
            }
        })

        if(conditionArr.length === parseInt(songsNumber)) {
            setCheckoutButtonClasses(activeButton)
        } else {
            setCheckoutButtonClasses(disabledButton)
        }

    }, [arr, songsNumber])

    const handleUpload = (file) => {
        const fileToUpload = file[0]

        if (validFileTypes.includes(fileToUpload.type)) {
            setSongFormatError("")

            const form = new FormData()
            form.append('song', fileToUpload)

            setSongUploadStatus(prev => ({...prev, isLoading: true}))

            axios.post('http://localhost:5000/api/upload/songs', form).then((res) => {
                setSongUploadStatus({isLoading: false, error: ''})
            }).catch(err => {
                setSongUploadStatus({isLoading: false, error: err})
            })
        } else {
            setSongFormatError("Formato canzone non corretto! Formati supportati: mp3")
        }
    }

  return (
    <div className="scaleIn bg-gray-700 min-h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">



        <div className="flex flex-col items-center justify-center">
            <div className="text-gray-900 font-semibold text-2xl">Quali saranno</div>
            <div className="text-gray-900 font-bold text-4xl">i tuoi brani?</div>
        </div>

        <div className="flex flex-col gap-4 max-h-[400px] overflow-x-hidden overflow-y-auto py-2">

            {arr.length > 0 && (
                arr.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 px-3">
                        <label className="text-white font-semibold">Titolo brano n. {index+1}</label>
                        <input onChange={(e) => setArrItem(index, e.target.value)} type="text" name="titolo" id="titolo" placeholder="Titolo" className="py-2 px-3 rounded-md border-none" />
                        <input onChange={(e) => handleUpload(e.target.files)} type="file" className={songUploadStatus.isLoading ? inputClassesDisabled : inputClassesEnabled}/>
                    </div>
                ))
            )}

        </div>

        <div className="flex flex-col gap-3 pb-10">

            {songUploadStatus.isLoading && (
                <div className="flex flex-col items-center text-center justify-center text-white font-semibold">
                <div>CARICAMENTO IN CORSO...</div>
                <BarLoader color="#ffffff"/>
                </div>
            )}
            

            <div onClick={prev} className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pr-5 pl-2 py-2 rounded-lg font-semibold flex items-center">
                <MdNavigateBefore size={30}/>
                <div className="font-semibold">Indietro</div>
            </div>



            <div onClick={handleSubmit} className={checkoutButtonClasses}>
                CHECKOUT
            </div>
            
        </div>


    </div>
  )
}

export default SongsPage