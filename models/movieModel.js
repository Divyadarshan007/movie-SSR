import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const Movie = new mongoose.model('Movie', movieSchema)

export default Movie