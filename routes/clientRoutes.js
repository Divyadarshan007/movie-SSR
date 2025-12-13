import express from 'express';
import { getClientPage } from '../controller/clientControl';

const router = express.Router()

router.get('/', getClientPage)


export default router

// file:///C:/Users/admin/Downloads/Moviepoint-Online-Movie-Template/Moviepoint-Online-Movie-Template/index-2.html