import { patientRegister } from "../controller/userController.js";
import express from "express";

const router = express.Router();

// router method

router.post("/patient/register",patientRegister);

export default router;
