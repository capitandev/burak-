import express from "express";
import app from "./app";
import memberController from "./controller/restaurant.controller";
const router = express.Router();
// //hompage 
// router.get(`/`,memberController.goHome) 
// //login 
// router.get(`/login`,memberController.getLogin) 
// //sigin up
// router.get(`/siginup`,memberController.getSiginup) 
export default router;