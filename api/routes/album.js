import express from "express"
import { getAllAlbums, getAlbumById, createAlbum, updateSongsInAlbum } from "../controllers/album.js"

const router = express.Router()

//CREATE
router.post("/", createAlbum)

//GET ALL
router.get("/", getAllAlbums)

//GET BY ID
router.get("/:id", getAlbumById)

//UPDATE SONGS IN ALBUM BY ID
router.put("/:id", updateSongsInAlbum)

export default router