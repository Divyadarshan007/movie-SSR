import express from 'express';
import { addMovie, deleteMovie, editMovie, formData, getAdminPage, updateMovie } from '../controller/adminControl.js';
import upload from '../middlewares/multer.js';

const router = express.Router()

router.get('/', getAdminPage)
router.get('/add-movie', formData)
router.get('/delete-movie/:deleteId', deleteMovie)
router.post('/add-movie', upload.single('avatar'), addMovie)
router.get('/edit-movie/:editId', editMovie)
router.post('/edit-movie/:editId',upload.single('avatar'), updateMovie)

export default router