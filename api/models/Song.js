import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    title: String,
    duration: String,
    album: {type: mongoose.Schema.Types.ObjectId, ref:'Album'},
    link: String
})

export default mongoose.model("Song", SongSchema)