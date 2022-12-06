import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//create new user
router.post("/signup", signup);

//login
router.post("/signin", signin);

//login google
router.post("/google");

export default router;
