import {combineReducers, configureStore} from "@reduxjs/toolkit"
import currentSong from "./slices/currentSong"

const reducer = combineReducers({
    currentSong
})

export default configureStore({
    reducer
})