import express from 'express'
import adminRouter from './routes/adminRoutes.js';

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/admin', adminRouter)
app.listen(PORT, ()=>{})