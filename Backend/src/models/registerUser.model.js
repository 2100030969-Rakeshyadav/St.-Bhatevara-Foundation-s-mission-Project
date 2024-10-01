import {Schema, model} from "mongoose"


const registerUserSchema=new Schema({
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
    mail:{
        type:String,
        required:true,
    },
    amt:{
        type:Number,
        required:true,
    },
    marks:{
        type:Number,
        required:true,
    },

},{timestamps:true})


export const RegisteredUser=model("RegisteredUser",registerUserSchema)