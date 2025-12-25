import express from 'express';
import { getClientPage, getDescDetail } from '../controller/clientControl.js';

const router = express.Router()

router.get('/', getClientPage)
router.get('/desc/:movieId', getDescDetail)

export default router