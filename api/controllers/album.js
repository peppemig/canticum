import Album from "../models/Album.js";

export const getAllAlbums = async (req,res) => {

    try {
        const albums = await Album.find()
        res.status(200).json(albums)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAlbumById = async (req,res) => {
    console.log(req.params.id)

    try {
        const album = await Album.findById(req.params.id).populate('songs')
        res.status(200).json(album)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const createAlbum = async (req,res) => {
    const newAlbum = new Album(req.body)

    try {
        const savedAlbum = await newAlbum.save()
        res.status(200).json(savedAlbum)
    } catch (error) {
        res.status(400).json(error)
    }
}