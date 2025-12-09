const getAdminPage = (req, res) => {
    return res.render('index')
}

const addMovie = (req, res) => {
    return res.render('basic')
}

export { getAdminPage, addMovie }