import express from "express"
import multer, { memoryStorage } from "multer"
import { uploadImage } from "../controllers/images.js"

const storage = memoryStorage()
const upload = multer({storage})
const router = express.Router()

//UPLOAD IMAGE
router.post("/", upload.single("image"), uploadImage)

export default router
