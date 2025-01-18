import mongoose from "mongoose";
import dotenv from 'dotenv';
import { DB_NAME } from "../constant.js";

dotenv.config();
const connectDB = async ()=>{
    try{
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
        console.log(`MongooDB connected!! DB host:${connectionInstance.connection.host}`)
    }catch(err){
        console.log("Mongoo ERROR:",err);
        process.exit(1)
    }
}

export default connectDB