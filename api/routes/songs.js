import express from "express"
import multer, { memoryStorage } from "multer"
import { getSongDuration, uploadSong } from "../controllers/songs.js"

const storage = memoryStorage()
const upload = multer({storage})
const router = express.Router()

//UPLOAD SONG
router.post("/", upload.single("song"), uploadSong)
router.post("/duration", upload.single("song"), getSongDuration)

export default router