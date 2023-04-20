import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
    createdAt: String,
    favSong: {type: mongoose.Schema.Types.ObjectId, ref:'Song'},
    album: {type: mongoose.Schema.Types.ObjectId, ref:'Album'}
})

export default mongoose.model("Favorite", FavoriteSchema)