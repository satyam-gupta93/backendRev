// require('dotenv').config()
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()











// import express from "express"
// const app = express()

// async function connectDB(){
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.listen(process.env.PORT,()=>{
//             console.log(`Listening on port:${process.env.PORT}`)
//         })
//     }catch(err){
//         console.log(err)
//         throw err
//     }
// }
// connectDB()