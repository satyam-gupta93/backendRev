import { v2 as cloudinary } from "cloudinary" 
import fs from "fs" 

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary  = async (localfilepath)=>{
    try{
        if(!localfilepath) return null
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
        console.log("File is uploded on cloudinari",response.url)
        return response
    }catch(err){
        fs.unlinkSync(localfilepath) //remove the temp saved file as upload operation get failed
        return null;
    }
}

export {uploadOnCloudinary}