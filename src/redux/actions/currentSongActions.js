import {setCurrentSong, setError, setLoading} from '../slices/currentSong'

export const addCurrentSong = (currentSongToAdd) => (dispatch) => {
    dispatch(setLoading(true))
    try {
        const currentSong = currentSongToAdd
        dispatch(setCurrentSong(currentSong))
    } catch (error) {
        dispatch(setError(error))
    }
}