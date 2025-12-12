import express from 'express';
import { addMovie, deleteMovie, formData, getAdminPage } from '../controller/adminControl.js';
import upload from '../middlewares/multer.js';

const router = express.Router()

router.get('/', getAdminPage)
router.get('/add-movie', formData)
router.get('/delete-movie/:deleteId', deleteMovie)
router.post('/add-movie', upload.single('avatar'), addMovie)

export default router