
import express from "express";
import { sendMessage } from "../controller/messageController.js";

//define router 
const router = express.Router();

// we will use postman to post msg

router.post("/send",sendMessage);
// router.get("/getall", isAdminAuthenticated,getAllMessages);

export default router;