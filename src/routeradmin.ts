import express from "express";
const routerAdmin = express.Router();
import RestaurantController from "./controller/restaurant.controller";



routerAdmin .get("/", RestaurantController.goHome);

routerAdmin
 .get("/login", RestaurantController.getLogin)
  .post("/login", RestaurantController.processLogin);

routerAdmin
  .get("/signup", RestaurantController.getSignup)
  .post("/signup", RestaurantController.processSignup);

export default routerAdmin;
