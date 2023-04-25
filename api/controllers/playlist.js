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
        const playlists = await Playlist.find().populate("playlistSongs")
        res.status(200).json(playlists)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const addSongToPlaylist = async (req,res) => {
    const {id} = req.params
    const {songId} = req.body

    try {
        const updatedPlaylist = await Playlist.findOneAndUpdate({_id: id}, { $push: { playlistSongs: songId }})
        res.status(200).json(updatedPlaylist)
    } catch (error) {
        res.status(200).json(error)
    }
}

export const deletePlaylist = async (req,res) => {
    const {id} = req.params

    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(id)
        res.status(200).json(deletedPlaylist)
    } catch (error) {
        res.status(200).json(error)
    }
}

export const getPlaylistById = async (req,res) => {
    const {id} = req.params

    try {
        const playlist = await Playlist.findById(id).populate("playlistSongs")
        res.status(200).json(playlist)
    } catch (error) {
        res.status(200).json(error)
    }
}