import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    description:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    author:{
        type: String,
        required: true
    },
    publishyear:{
        type: Number,
        required: true
    }
}, { timestamps: true });


export const Book = mongoose.model('book', bookSchema)