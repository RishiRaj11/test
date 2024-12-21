import { Router } from "express";
// import { signUpHandler,loginHandler } from "../controller/userController.js";
// import { getAllMovies } from "../controller/moviesController.js";
import {groupController,deleteGroupController} from "../controller/groupController.js"
const router=Router();

//endpints
// router.post("/signup",signUpHandler)
// router.post("/login",loginHandler)
// router.get("/getmovies",getAllMovies)
router.get("/api/groups",groupController);
router.delete('/api/groups/:id',deleteGroupController);

export default router;