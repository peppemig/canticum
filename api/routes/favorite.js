import express from "express"
import {createFavorite, deleteFav, getAllFavs} from "../controllers/favorite.js"

const router = express.Router()

//CREATE
router.post("/", createFavorite)

//GET ALL
router.get("/", getAllFavs)

//DELETE
router.delete("/:id", deleteFav)

export default router