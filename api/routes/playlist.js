import express from "express"
import { createPlaylist, getAllPlaylists } from "../controllers/playlist.js"
const router = express.Router()

//CREATE 
router.post("/", createPlaylist)

//GET ALL
router.get("/", getAllPlaylists)

export default router