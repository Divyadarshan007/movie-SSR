import mongoose from "mongoose";
const MONGO_URI = 'mongodb://localhost:27017/movieDb'
const connectDb = async() => {
    try {
        await mongoose.connect(MONGO_URI).then(()=>{
            console.log('Database connected Succefully...');
            
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb