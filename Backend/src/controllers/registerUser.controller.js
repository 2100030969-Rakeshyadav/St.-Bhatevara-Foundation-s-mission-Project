import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {RegisteredUser} from "../models/registerUser.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";


// Add this function in user.controllers.js

const getRegisteredUsers = asyncHandler(async (req, res) => {
    const regUser = await RegisteredUser.find({});

    return res.status(200).json(new ApiResponse(200, regUser, "Users fetched successfully"));
});

// Add getUsers to the exports


const registeredUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // create user object - create entry in db
    // return res

    const {name, age, gender, mail, amt, marks} = req.body

    //console.log("email: ", email);

    if (
        [name, age, gender, mail, amt, marks].some((field) => field?.trim() === "")

    ) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await RegisteredUser.create({
        name, age, gender, mail, amt, marks
    })

    return res.status(201).json(
        new ApiResponse(200,user, "User registered Successfully")
    )

})

export { registeredUser, getRegisteredUsers };