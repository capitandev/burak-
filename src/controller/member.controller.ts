// Controller doim Objectlardan hosil qilinadiu 

import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
// For REACT

 const memberController: T = {};
// memberController.goHome = (req: Request, res: Response) => {
//     try {
//         res.send(`You are Homepage Page `);
//     } catch (err) {
//         console.log(`Error , gohome page`, err);
//     }

// }

// memberController.getLogin = (req: Request, res: Response) => {
//     try {
//         res.send(`You are Login Page `);
//     } catch (err) {
//         console.log(`Error , goLogin page`, err);
//     }

// }
// memberController.getSiginup = (req: Request, res: Response) => {
//     try {
//         res.send(`You are Siginup Page `);
//     } catch (err) {
//         console.log(`Error , goSiginup page`, err);
//     }

// }
export default memberController;
