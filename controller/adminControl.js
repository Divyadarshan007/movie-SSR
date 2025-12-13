import Movie from "../models/movieModel.js"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getAdminPage = async (req, res) => {
    const allMovie = await Movie.find({})

    return res.render('index', { allMovie })
}

const addMovie = async (req, res) => {
    const payload = {
        ...req.body,
        avatar: req.file.path
    }

    const newData = new Movie(payload)
    await newData.save()
    return res.redirect('/admin')
}

const deleteMovie = async (req, res) => {
    const { deleteId } = req.params
    const thatOneMovie = await Movie.findById(deleteId)
    const imagePath = path.join(__dirname, "..", thatOneMovie.avatar)
    console.log(imagePath);


    fs.unlink(imagePath, (err) => {
        console.log(err);
    })

    await Movie.findByIdAndDelete(deleteId)
    return res.redirect('/admin')
}
const editMovie = async (req, res) => {
    const { editId } = req.params
    const thatOneMovie = await Movie.findById(editId);
    return res.render('edit', {
        thatOneMovie
    })
}
const updateMovie = async (req, res) => {
    const { editId } = req.params;
    const thatOneMovie = await Movie.findById(editId);
    const updatedMovie = req.body
    if (req.file) {
        const oldImagePath = path.join(__dirname, "..", thatOneMovie.avatar )
        fs.unlink(oldImagePath, ()=>{})

        const newImagePath = req.file.path
        updatedMovie.avatar = newImagePath
    }

    await Movie.findByIdAndUpdate(editId, updatedMovie)
    return res.redirect('/admin') 
}
const formData = (req, res) => {
    return res.render('basic')
}
export { getAdminPage, updateMovie, addMovie, formData, deleteMovie, editMovie }