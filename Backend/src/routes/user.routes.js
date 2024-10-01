import { Router } from "express";

import {registerUser,getUsers,deleteUser} from "../controllers/user.controllers.js";
import {registeredUser, getRegisteredUsers} from "../controllers/registerUser.controller.js"



const router=Router()

router.route("/register").post(registerUser)
router.route("/registered").post(registeredUser)

// Add this route in user.routes.js

router.route("/").get(getUsers);
router.route("/").get(getRegisteredUsers);

router.route("/:id").delete(deleteUser);

export default router