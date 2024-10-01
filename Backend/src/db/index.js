/*global process*/
import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

const dbConnect=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Connection Successful...Host ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB Connection Failed",error);
        process.exit(1);
    }
}

export default dbConnect;