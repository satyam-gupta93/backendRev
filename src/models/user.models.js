import moongose, { modelNames, Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new moongose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true        
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true        
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //cloudnari url
        required:true
    },
    coverImage:{
        type:String, //cloudnairi url
       
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"],
       
    },
    refreshToken:{
        type:String,

    }
        
    
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(this.isModifed("password"))return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)

    
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName,



        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = moongose.model("User",userSchema)