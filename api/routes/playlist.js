import express from "express"
import { addSongToPlaylist, createPlaylist, deletePlaylist, getAllPlaylists, getPlaylistById } from "../controllers/playlist.js"
const router = express.Router()

//CREATE 
router.post("/", createPlaylist)

//GET ALL
router.get("/", getAllPlaylists)

//GET BY ID
router.get("/:id", getPlaylistById)

//PUSH SONG TO PLAYLIST
router.put("/:id", addSongToPlaylist)

//DELETE PLAYLIST
router.delete("/:id", deletePlaylist)

export default router