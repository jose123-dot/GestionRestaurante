import { Router } from "express";
import * as authcontroller from "../Controller/auth-controllers.js";

const authRoter = Router();

authRoter.post("/signup", authcontroller.signup);
authRoter.post("/signin", authcontroller.signin);

export default authRoter;
