import mongoose, { Schema } from "mongoose";

const videoSchema = mongoose.Schema({
    videoFile: {
        type: string, //cloudinary url
        required: true,
    },

    thumbnail:{
        type: string, //cloudinary url
        required: true
    },

    title:{
        type: string,
        required: true
    },

    description:{
        type: string,
        required: true
    },

    duration:{
        type: number, //cloudinary url
        required: true
    },

    views: {
        type: number,
        default: 0
    },

    isPublished: {
        type: Boolean,
        default: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

export const Video = mongoose.model("Video", videoSchema);