import {combineReducers, configureStore} from "@reduxjs/toolkit"
import currentSong from "./slices/currentSong"
import mobilePlayerOpen from "./slices/mobilePlayerOpen"

const reducer = combineReducers({
    currentSong,
    mobilePlayerOpen
})

export default configureStore({
    reducer
})