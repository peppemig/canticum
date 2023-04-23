import express from "express"
import multer, { memoryStorage } from "multer"
import { uploadSong } from "../controllers/songs.js"

const storage = memoryStorage()
const upload = multer({storage})
const router = express.Router()

//UPLOAD SONG
router.post("/", upload.single("song"), uploadSong)

export default router