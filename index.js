import express from 'express'
import adminRouter from './routes/adminRoutes.js';
import connectDb from './config/db.js';

const app = express();
const PORT = 3000;

connectDb()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }))
app.use('/admin', adminRouter)
app.listen(PORT, ()=>{})