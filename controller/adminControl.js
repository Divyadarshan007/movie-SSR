import Movie from "../models/movieModel.js"

const getAdminPage = async (req, res) => {
    const allMovie = await Movie.find({})

    return res.render('index', { allMovie })
}

const addMovie = async (req, res) => {
    const payload = {
        ...req.body,
        avatar: req.file.path
    }
    console.log(payload);

    const newData = new Movie(payload)
    await newData.save()

    return res.redirect('/admin')
}


const deleteMovie = async (req, res) => {

    const { deleteId } = req.params

    await Movie.findByIdAndDelete(deleteId)

    return res.redirect('/admin')
}
const formData = (req, res) => {
    return res.render('basic')
}

export { getAdminPage, addMovie, formData, deleteMovie }