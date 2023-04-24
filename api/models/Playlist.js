import mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    playlistTitle: String,
    playlistSongs: [{type: mongoose.Schema.Types.ObjectId, ref:'Song'}] 
})

export default mongoose.model("Playlist", PlaylistSchema)