import express from 'express';
import { addMovie, getAdminPage } from '../controller/adminControl.js';

const router = express.Router()

router.get('/', getAdminPage)
router.get('/add-movie', addMovie)

export default router