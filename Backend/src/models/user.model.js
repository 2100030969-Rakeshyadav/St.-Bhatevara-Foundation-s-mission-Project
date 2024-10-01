import {Schema, model} from "mongoose"


const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    twelve:{
        type:Number,
        required:true,
    },
    income:{
        type:Number,
        required:true,
    },
    father_name:{
        type:String,
        required:true,
    },
    father_occ:{
        type:String,
        required:true,
    },
    mother_name:{
        type:String,
        required:true,
    },
    mother_occ:{
        type:String,
        required:true,
    },
    edu_stream:{
        type:String,
        required:true,
    },
    college_name:{
        type:String,
        required:true,
    },
    college_id:{
        type:String,
        required:true,
    },
    college_fee:{
        type:Number,
        required:true,
    },
    grad:{
        type:String,
        required:true,
    },
    add:{
        type:String,
        required:true,
    },
    ph:{
        type:Number,
        required:true,
    },
    mail:{
        type:String,
        required:true,
    },

},{timestamps:true})


export const Users=model("Users",userSchema)