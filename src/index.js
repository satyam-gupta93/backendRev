// require('dotenv').config()
import dotenv from 'dotenv/config';
import connectDB from "./db/index.js";
import { app } from './app.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Listening on port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("ERROR:",err)
})

























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