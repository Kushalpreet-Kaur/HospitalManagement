import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import {errorMiddleware} from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";


const app = express();

config({path:"./config/config.env"});


// MIDDLEWARE to connect frontend

// we will use cors here to connect


app.use(cors(  {
    origin:[process.env.FRONTEND_URL , process.env.DASHBOARD_URL],methods:["GET","POST","PUT","DELETE"] /*tell which methods to use in the project*/,credentials:true,
}  ));


// another middleware to get cookies

app.use(cookieParser());

// to parse json format to string format

app.use(express.json());

// need to handle form submissions parses the URL-encoded data (i.e., key-value pairs) from the request body and makes it available under the req.body object in your route handlers.
// extended: true: This option allows for rich objects and arrays to be encoded into the URL-encoded format, using the qs library.
app.use(express.urlencoded(  {extended:true} ))

// to upload file

app.use(fileUpload( {useTempFiles:true , tempFileDir:"/tmp"} ));

app.use("/api/v1/message",messageRouter);
app.use("/api/v1/user",userRouter);

dbConnection();

// use it in end
app.use(errorMiddleware);
export default app;

