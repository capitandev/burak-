import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../modules/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/types/Errors";

//REACT
const memberController: T  = {};

const memberService = new MemberService();

memberController.signup = async (req: Request, res: Response) => {
    try{
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input);
        //TODO: Token authentic
        res.json({ member: result });
    } catch (err) {
        console.log("Error, signup:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};


memberController.login = async (req: Request, res: Response) => {
    try{
        console.log("login");
        const input: LoginInput = req.body,
         result = await memberService.login(input);
        //TODO: Token authentic

        res.json({ member: result });
    } catch (err) {
        console.log("Error, login:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    
    }

};



export default memberController;