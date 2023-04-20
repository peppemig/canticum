import Favorite from "../models/Favorite.js"
import {format} from "date-fns"

// GENERATE DATE 'dd/MM/yyyy'
export const genDate = () => {
    const date = new Date
    const formattedDate = format(date, 'dd/MM/yyyy')
    return formattedDate
}

export const createFavorite = async (req,res) => {
    try {
        const {favSong, album} = req.body

        const newFav = new Favorite({
            createdAt: genDate(),
            album: album,
            favSong: favSong
        })

        const savedNewFav = await newFav.save()
        res.status(200).json(savedNewFav)

    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteFav = async (req,res) => {
    try {
        const favToDelete = req.params.id
        const deleteFav = await Favorite.findByIdAndDelete(favToDelete)
        res.status(200).json(deleteFav)
    } catch (error) {
        res.status(200).json(error)
    }
}

export const getAllFavs = async (req,res) => {
    try {
        const songs = await Favorite.find().populate(['favSong', 'album'])
        res.status(200).json(songs)
    } catch (error) {
        res.status(400).json(error)
    }
}