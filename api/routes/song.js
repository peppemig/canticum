import express from "express"
import { getAllSongs, getSongById, createSong } from "../controllers/song.js" 

const router = express.Router()

//CREATE
router.post("/", createSong)

//GET ALL
router.get("/", getAllSongs)

//GET BY ID
router.get("/:id", getSongById)

export default router