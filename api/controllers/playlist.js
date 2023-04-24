import Playlist from "../models/Playlist.js";

export const createPlaylist = async (req,res) => {
    try {
        const {playlistTitle} = req.body

        const newPlaylist = new Playlist({playlistTitle: playlistTitle, playlistSongs: []})
        const savedPlaylist = await newPlaylist.save()
        res.status(200).json(savedPlaylist)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllPlaylists = async (req,res) => {
    try {
        const playlists = await Playlist.find()
        res.status(200).json(playlists)
    } catch (error) {
        res.status(400).json(error)
    }
}