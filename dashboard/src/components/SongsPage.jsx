import { MdNavigateBefore } from "react-icons/md"

const SongsPage = ({prev, songsNumber, handleSongsArray, submit}) => {
    const arr = Array.from(Array(parseInt(songsNumber)).keys())

    const setArrItem = (index, title) => {
        arr[index] = {title: title, duration: '4:20'}
    }

    const handleSubmit = () => {
        handleSongsArray(arr);
        submit();
    }


  return (
    <div className="scaleIn bg-gray-700 min-h-[500px] min-w-[380px] flex items-center justify-center rounded-lg flex-col p-3 gap-8">



        <div className="flex flex-col items-center justify-center">
            <div className="text-gray-900 font-semibold text-2xl">Come sarà</div>
            <div className="text-gray-900 font-bold text-4xl">il tuo album?</div>
        </div>

        <div className="flex flex-col gap-4 max-h-[400px] overflow-x-hidden overflow-y-auto py-2">

            {arr.length > 0 && (
                arr.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1 px-3">
                        <label className="text-white font-semibold">Titolo brano n. {index+1}</label>
                        <input onChange={(e) => setArrItem(index, e.target.value)} type="text" name="titolo" id="titolo" placeholder="Titolo" className="py-2 px-3 rounded-md border-none" />
                    </div>
                ))
            )}

        </div>

        <div className="flex flex-col gap-3 pb-10">
            

            <div onClick={prev} className="bg-gray-900 hover:bg-white hover:text-gray-900 transition cursor-pointer text-white pr-5 pl-2 py-2 rounded-lg font-semibold flex items-center">
                <MdNavigateBefore size={30}/>
                <div className="font-semibold">Indietro</div>
            </div>



            <div onClick={handleSubmit} className="cursor-pointer bg-white text-black flex items-center justify-center py-2 rounded-full font-bold">
                SUBMIT
            </div>
            
        </div>


    </div>
  )
}

export default SongsPage