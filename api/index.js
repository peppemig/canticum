import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import albumRoute from "./routes/album.js"
import songRoute from "./routes/song.js"
import favoriteRoute from "./routes/favorite.js"
import imagesRoute from "./routes/images.js"

const app = express()
dotenv.config()

// middlewares
app.use(cors())
app.use(express.json())

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB')
    } catch (err) {
        throw err;
    }
};

// ROUTES
app.use("/api/album", albumRoute)
app.use("/api/song", songRoute)
app.use("/api/fav", favoriteRoute)
app.use("/api/images", imagesRoute)

// TEST
app.get("/hello", (req,res) => {
    res.json("hello world!")
})

// START
app.listen(5000, () => {
    connect()
    console.log("Server started")
})