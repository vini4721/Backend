import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },

    fullname: {
        type: String,
        required: true,
        index: true
    },

    avatar: {
        type: String, //cloudinary url
        required: true
    },

    coverImage: {
        type: String,
    },

    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },

    password: {
        type: String,
        required: true
    },

    refreshToken: {
        type: string
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export {User};