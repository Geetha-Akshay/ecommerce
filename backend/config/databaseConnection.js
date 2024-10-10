import mongoose from "mongoose";

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Database connected...")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDb;