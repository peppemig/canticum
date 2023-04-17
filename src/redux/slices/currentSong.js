import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    loading: false,
    errore: null,
    currentSong: ''
}

const updateLocalStorage = (currentSong) => {
    localStorage.setItem('currentSong', currentSong)
}

export const currentSongSlice = createSlice({
    name: 'currentSong',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setCurrentSong: (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.currentSong = payload;
            updateLocalStorage(state.currentSong)
        },
        setError: (state, {payload}) => {
            state.error = payload;
            state.loading = false
        }
    }
})

export const {setCurrentSong, setError, setLoading} = currentSongSlice.actions;
export default currentSongSlice.reducer;

export const currentSongSelector = (state) => state.currentSong