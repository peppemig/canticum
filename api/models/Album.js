import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
    albumTitle: String,
    artist: String,
    cover: String,
    year: Number,
    songs: [{type: mongoose.Schema.Types.ObjectId, ref:'Song'}]
})

export default mongoose.model("Album", AlbumSchema)