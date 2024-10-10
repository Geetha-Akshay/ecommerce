import express from "express"
import "dotenv/config"
import connectDb from "./config/databaseConnection.js"
import cors from "cors";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

//App config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use('/api/cart',cartRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,() => {
    console.log(`server is connected to ${port}`)
})