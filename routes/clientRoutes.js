import express from 'express';
import { getClientPage, getDescDetail } from '../controller/clientControl.js';

const router = express.Router()

router.get('/', getClientPage)
router.get('/desc/:movieId', getDescDetail)

export default router

// file:///C:/Users/admin/Downloads/Moviepoint-Online-Movie-Template/Moviepoint-Online-Movie-Template/index-2.html