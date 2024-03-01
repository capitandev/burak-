import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./src/controller/restaurant.controller";


//hompage 
routerAdmin.get(`/`,restaurantController.goHome) 
//login 
routerAdmin.get(`/login`,restaurantController.getLogin) 
//sigin up
routerAdmin.get(`/signup`,restaurantController.getSignup) 
export default routerAdmin;