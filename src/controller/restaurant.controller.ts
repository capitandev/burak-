// Controller doim Objectlardan hosil qilinadiu 

import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MenberService from "../modules/Member.service"


const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send(`You are Homepage Page `);
    } catch (err) {
        console.log(`Error , gohome page`, err);
    }

}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send(`You are Login Page `);
    } catch (err) {
        console.log(`Error , goLogin page`, err);
    }

}
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send(`You are Signup Page `);
    } catch (err) {
        console.log(`Error , goSignup page`, err);
    }

}
export default restaurantController;
