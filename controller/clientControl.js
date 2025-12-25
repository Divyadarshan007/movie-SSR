import Movie from "../models/movieModel.js"

const getClientPage = async (req, res) => {
    const movies = await Movie.find({})
    return res.render('home', { movies })
}


const getDescDetail = async (req, res) => {
    const { movieId } = req.params
    const thatOneMovie = await Movie.findById(movieId)
    return res.render('desc', { thatOneMovie })
}
export { getClientPage, getDescDetail }
