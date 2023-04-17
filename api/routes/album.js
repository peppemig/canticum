import express from "express"
import { getAllAlbums, getAlbumById, createAlbum } from "../controllers/album.js"

const router = express.Router()

//CREATE
router.post("/", createAlbum)

//GET ALL
router.get("/", getAllAlbums)

//GET BY ID
router.get("/:id", getAlbumById)

export default router