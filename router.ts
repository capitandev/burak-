import express from "express";
import app from "./src/app";
import memberController from "./src/controller/restaurant.controller";
const router = express.Router();
// //hompage 
// router.get(`/`,memberController.goHome) 
// //login 
// router.get(`/login`,memberController.getLogin) 
// //sigin up
// router.get(`/siginup`,memberController.getSiginup) 
export default router;