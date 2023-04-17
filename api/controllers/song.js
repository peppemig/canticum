import Song from "../models/Song.js";

export const getAllSongs = async (req,res) => {

    try {
        const songs = await Song.find()
        res.status(200).json(songs)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getSongById = async (req,res) => {
    
    try {
        const song = await Song.findById(req.params.id).populate('album')
        res.status(200).json(song)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const createSong = async (req,res) => {
    const newSong = new Song(req.body)

    try {
        const savedSong = await newSong.save()
        res.status(200).json(savedSong)
    } catch (error) {
        res.status(400).json(error)
    }
}