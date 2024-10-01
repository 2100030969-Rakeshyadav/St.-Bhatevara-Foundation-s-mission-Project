import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Users} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";


// Add this function in user.controllers.js
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    
    const user = '667741f1d622b5647af8d85b';
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    await user.remove();
    return res.status(200).json(new ApiResponse(200, null, "User deleted successfully"));
});

const getUsers = asyncHandler(async (req, res) => {
    const users = await Users.find({});

    return res.status(200).json(new ApiResponse(200, users, "Users fetched successfully"));
});

// Add getUsers to the exports


const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // create user object - create entry in db
    // return res

    const {name, age, gender, 
        twelve, income, father_name, 
        father_occ, mother_name, mother_occ, 
        edu_stream, college_name, college_id, 

        college_fee, grad, add, ph, mail} = req.body

    //console.log("email: ", email);

    if (
        [name, age, gender, 
            twelve, income, father_name, 
            father_occ, mother_name, mother_occ, 
            edu_stream, college_name, college_id, 

            

            college_fee, grad, add, ph, mail].some((field) => field?.trim() === "")

    ) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await Users.create({
        name, age, gender, 
        twelve, income, father_name, 
        father_occ, mother_name, mother_occ, 
        edu_stream, college_name, college_id, 

        

        college_fee, grad, add, ph, mail

    })

    return res.status(201).json(
        new ApiResponse(200,user, "User registered Successfully")
    )

})

export { registerUser, getUsers ,deleteUser};